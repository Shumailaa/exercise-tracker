import { useRouter } from 'next/router';
import useAuth from './useAuth';
export default function useRoutes(setAnchorEl) {
    const router = useRouter();
    const { handleLogout } = useAuth();

    const gotoLandingPage = () => { router.push('/') }

    const logout = () => {  handleLogout() }
    return { gotoLandingPage, logout }
   
}