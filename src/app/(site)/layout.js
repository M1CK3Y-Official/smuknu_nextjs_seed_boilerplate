import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';

export default function siteLayout({ children }) {
    return <div>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
    </div>
}