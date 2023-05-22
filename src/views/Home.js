import Hero from '../components/Hero';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import NewItems from '../components/NewItems';
import FeaturesSecond from '../components/FeaturesSecond';
import ProductSlider from '../components/ProductSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import NewItemsSlider from '../components/NewItemsSlider';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <FeaturesSecond />
            <Products />
            <ProductSlider />
            <NewItems />
            <NewItemsSlider />
            <Testimonial />
            <TestimonialSlider />
            <Newsletter />
            <Footer />


        </div>
    )
}