import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'
import NavBar from '../../components/NavBar'

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <section>
                <Outlet>
                    {
                        children
                    }
                </Outlet>
            </section>
            <Footer />
        </>
    )
};