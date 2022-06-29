import {
	useState,
	createContext,
	useContext,
	useMemo,
	memo,
	useEffect,
} from 'react';
import { useRouter } from 'next/router';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
import { auth } from '../firebase';

interface IAuth {
	user: User | null;
	signUp: (email: string, password: string) => Promise<void>;
	signIn: (email: string, password: string) => Promise<void>;
	logout: () => void;
	error: string | null;
	loading: boolean;
}

const AuthContext = createContext<IAuth>({
	user: null,
	signUp: async () => {},
	signIn: async () => {},
	logout: () => {},
	error: null,
	loading: false,
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState(null);
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// Logged In user
					setUser(user);
					setLoading(false);
				} else {
					// No user
					setUser(null);
					setLoading(false);
					router.push('/login');
				}

				setInitialLoading(false);
			}),
		[auth]
	);

	const router = useRouter();

	const signUp = async (email: string, password: string) => {
		setLoading(true);

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				setUser(userCred.user);
				router.push('/');
				setLoading(false);
			})
			.catch((err) => alert(err.message))
			.finally(() => setLoading(false));
	};

	const signIn = async (email: string, password: string) => {
		setLoading(true);

		await signInWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				setUser(userCred.user);
				router.push('/');
				setLoading(false);
			})
			.catch((err) => alert(err.message))
			.finally(() => setLoading(false));
	};

	const logout = async () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((err) => alert(err.message))
			.finally(() => setLoading(false));
	};

	const memoedValue = useMemo(
		() => ({
			user,
			signUp,
			signIn,
			logout,
			loading,
			error,
		}),
		[user, loading]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!initialLoading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
