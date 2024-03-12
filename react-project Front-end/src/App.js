

import React, { createContext, useState } from 'react'
import {
        BrowserRouter as Router,
        Routes,
        Route
} from "react-router-dom";
import './App.css';
import Navbar from './Mycomponents/Navbar';
import FAQS from './Mycomponents/FAQS'
import { Body1 } from './Mycomponents/Body1';
import Destinations from './Mycomponents/Destinations';
import Buypage from './Mycomponents/Buypage';
import AppFooter from './Mycomponents/AppFooter';
import About from './Mycomponents/About';


export const maindata = createContext()
function App() {
        const [whereclick, setwhereclick] = useState('')
        const handleNavigate = (section) => {
                setwhereclick(section);
                // return <Navigate to={to} />;
        };
        /* Question/Answer of FAQ,s*/
        const FAQsQA = {
                "How can I make a reservation?": "You can easily make a reservation through our website or by contacting our customer service. Detailed steps can be found on our booking page.",
                " What is included in the tour price?": "Our tour packages typically include accommodation, transportation, guided tours, and specified activities. Please refer to the itinerary for a detailed list of inclusions.",
                "Is there any additional fees not included in price?": " Additional fees may apply for optional activities, meals not specified in the itinerary, and personal expenses. Check the tour details for clarification.",
                "What is your refund policy?": "Our refund policy varies based on the type of tour and the timing of the cancellation. Refer to our Terms and Conditions for detailed information on refunds.",
                "Can I cancel or modify my booking?": " Cancellation and modification policies depend on the tour type and timing. Please review our Terms and Conditions or contact our customer service for assistance.",
                " How can I be sure of the authenticity of your staff?": "Our team undergoes a rigorous selection process, including background checks. Our guides and staff are experienced professionals dedicated to ensuring a safe and enjoyable travel experience.",
                "What security measures are in place during the trip?": "We prioritize the safety of our clients. Our tours adhere to local safety standards, and our guides are trained to handle emergency situations. We also provide emergency contact information.",
                "Can I customize my trip itinerary?": "Some of our tours allow customization. Contact our customer service to discuss your preferences, and we will do our best to accommodate your requests.",
                "Are activities suitable for all ages and fitness levels": " Our tours are designed to cater to a wide range of ages and fitness levels. Specific activity details and fitness requirements are provided in the tour description.",
                "How can I be sure your travel agency is reliable?": "We are a registered and licensed travel agency with a proven track record. Check our reviews, testimonials, and affiliations to ensure our reliability and commitment to customer satisfaction.",

        }

        const user_reviews = {
                "michelle lesley": "Booking our dream vacation through sukoon was an absolute delight! The website's user friendly interface made the process seamless, and their attention to detail ensured that every aspect of our trip exceeded expectations. Can't wait to plan our next adventure with them!",
                "Rana Nouman": "I highly recommend sukoon for their exceptional service and personalized travel experiences. From start to finish, the team was responsive, knowledgeable, and went above and beyond to make our journey unforgettable.",
                "Rahul Kumar": "As a frequent traveler, I've used several online travel agencies, and sukoon stands out for its reliability and transparency. The website is easy to navigate, and the real-time updates on our itinerary gave us peace of mind throughout the trip. Will definitely choose them again.",
                "María José": "Kudos to sukoon for crafting an itinerary that perfectly aligned with our interests and preferences. The attention to detail, coupled with their local insights, made our vacation truly special. Their commitment to customer satisfaction is commendable!"
        }
        const desData = {
                Dubai: {
                        name: "Dubai",
                        category: "private tour",
                        requirements: ["National ID card"],
                        pickup: ["islamabad"],
                        durations: "3 days 4 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg",
                        people: "Anyone",
                        overview: `Dubai, located in the United Arab Emirates, is a dynamic metropolis known for its stunning modern architecture, luxurious lifestyle, and vibrant cultural scene. This global hub is famous for iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an artificial archipelago. Renowned for its extravagant shopping malls, bustling souks, and desert adventures, Dubai seamlessly blends tradition and innovation. The city attracts visitors with its diverse attractions, including high-end resorts, entertainment venues, and a cosmopolitan atmosphere, making it a top destination for luxury travel and business endeavors.`,
                        price: 177709,
                        city_id: "292223"
                        // desimages:['../images/dubaiimg1.jpg','../images/dubaiimg2.jpg','../images/dubaiimg3.jpg','../images/dubaiimg4.jpg']

                },
                Turkey: {
                        name: "Turkey",
                        category: "private tour",
                        requirements: ["Passport copies (for foreigners)",
                                "  NOC (In case of foreign diplomats)",
                                " COVID-19 Vaccination card",
                                "National ID card"],
                        pickup: ["islamabad"],
                        durations: "7 days 8 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://www.celebritycruises.com/blog/content/uploads/2022/12/best-time-to-visit-istanbul-hero-cta.jpg",
                        people: "3 to 5 persons",
                        overview: `Turkey, straddling Europe and Asia, is a captivating nation boasting a rich blend of historical significance and natural beauty. Renowned for iconic landmarks like the Hagia Sophia and Blue Mosque in Istanbul, Turkey offers a tapestry of ancient civilizations. The country features diverse landscapes, from the stunning beaches of Antalya to the unique rock formations in Cappadocia. Turkish cuisine, with its delightful blend of flavors, is a culinary delight enjoyed worldwide. As a bridge between East and West, Turkey's warm hospitality and vibrant culture make it a fascinating destination for travelers seeking a harmonious fusion of tradition and modernity.`,
                        price: 705226,
                        city_id: "745044"
                        // desimages:['../images/turkeyimg1.jpg','../images/turkeyimg2.jpg','../images/turkeyimg3.jpg','../images/turkeyimg4.jpg']
                },
                France: {
                        name: "France",
                        category: "private tour",
                        requirements: ["Cnic"],
                        pickup: ["islamabad"],
                        durations: "7 days 8 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg",
                        people: "Couple only",
                        overview: `France, a European gem, boasts a rich tapestry of history, culture, and art. From the iconic Eiffel Tower in Paris to the picturesque vineyards of Bordeaux, the country is a tapestry of diverse landscapes and gastronomic delights. Renowned for its world-class museums, charming villages, and the French Riviera's glamorous allure, France captivates visitors with its elegance and sophistication. Whether exploring historic landmarks like the Louvre or savoring delectable cuisine in Provence, France offers a timeless blend of romance, history, and joie de vivre.`,
                        price: 2376611,
                        city_id: "2968815"
                        // desimages:['../images/franceimg1.jpg','../images/franceimg2.jpg','../images/franceimg3.jpg','../images/franceimg4.jpg']
                },
                Skardu: {
                        name: "Skardu",
                        category: "private tour",
                        requirements: ["Cnic"],
                        pickup: ["islamabad", "lahore", "karachi"],
                        durations: "5 days 6 nights",
                        means: "By road",
                        food: "Food available",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://miro.medium.com/v2/resize:fit:960/0*aU4Dw1YuffIozHQG.jpg",
                        people: "Couple only",
                        overview: `Nestled in the picturesque landscapes of northern Pakistan, Skardu is a captivating destination celebrated for its breathtaking mountain vistas, including the stunning Karakoram Range and serene lakes like Shangrila Resort. This enchanting town serves as a gateway to some of the world's highest peaks, such as K2. Skardu offers a rich blend of adventure with trekking opportunities, cultural heritage in the form of ancient forts, and a tranquil ambiance along the Indus River, making it a haven for nature enthusiasts and trekkers alike.`,
                        price: 19000,
                        city_id: "1164709"
                        // desimages:['../images/skarduimg1.jpg','../images/skarduimg2.jpg','../images/skarduimg3.jpg','../images/skarduimg4.jpg']
                },
                Germany: {
                        name: "Germany",
                        category: "private tour",
                        requirements: ["Passport copies (for foreigners)",
                                "  NOC (In case of foreign diplomats)",
                                " COVID-19 Vaccination card",
                                "National ID card"],
                        pickup: ["islamabad"],
                        durations: "7 days 8 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://www.travelandleisure.com/thmb/HDGpaa9IBKgK71w7UDgoAZXesC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-rothenburg-ob-der-tauber-PLACESGER0623-a9378cf8ee2b45be96e72e662597a036.jpg",
                        people: "2 persons only",
                        overview: `Germany, a European travel gem, beckons with its diverse attractions. Explore historic cities like Berlin and Munich, where centuries-old architecture meets vibrant cultural scenes. Delight in scenic landscapes, from the enchanting Black Forest to the picturesque Rhine River. Immerse in Germany's rich history through medieval castles, renowned museums, and lively festivals. The country's efficient transport system enhances the travel experience, offering seamless journeys to fairy-tale towns, charming villages, and iconic landmarks, making Germany a must-visit for cultural exploration and scenic adventures.`,
                        price: 8009179,
                        city_id: "2950159"
                        // desimages:['../images/germanyimg1.jpg','../images/germanyimg2.jpg','../images/germanyimg3.jpg','../images/germanyimg4.jpg']
                },
                Newyork: {
                        name: "Newyork",
                        category: "public tour",
                        requirements: ["Passport copies (for foreigners)",
                                "  NOC (In case of foreign diplomats)",
                                " COVID-19 Vaccination card",
                                "National ID card"],
                        pickup: ["islamabad"],
                        durations: "7 days 8 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
                        people: "3 to 5 persons",
                        overview: `New York, an iconic travel destination, captivates with its dynamic energy and cultural diversity. Explore world-renowned landmarks such as Times Square, Central Park, and the Statue of Liberty. Immerse in the vibrant arts scene at Broadway theaters and prestigious museums like the Metropolitan Museum of Art. Indulge in diverse culinary experiences in neighborhoods like Chinatown and Little Italy. With its bustling streets, towering skyscrapers, and a mix of historic and contemporary attractions, New York promises an unforgettable journey for urban enthusiasts and culture seekers alike.`,
                        price: 961144,
                        city_id: "5128581"
                        // desimages:['../images/newyorkimg1.jpg','../images/newyorkimg2.jpg','../images/newyorkimg3.jpg','../images/newyorkimg4.jpg']
                },

                Alaska: {
                        name: "Alaska",
                        category: "private tour",
                        requirements: ["Passport", "Visa"],
                        pickup: ["islamabad"],
                        durations: "7 days+",
                        means: "By air + road",
                        food: "Food available",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see ,prices click on buy",
                        img_src: "https://globalgrasshopper.com/wp-content/uploads/2020/09/The-Alaska-Highway-1000x667.jpg",
                        people: "1 to 2 persons",
                        overview: `Alaska, a pristine wilderness in the United States, beckons explorers with its untouched beauty. Discover vast landscapes of glaciers, mountains, and wildlife, creating an outdoor enthusiast's paradise. The Northern Lights dance across the Arctic skies, adding a touch of magic to the rugged terrain. Adventure seekers can embark on thrilling activities like dog sledding, whale watching, and hiking in Denali National Park. Alaska's remote charm and diverse ecosystems promise a unique journey, making it an unparalleled destination for those seeking unspoiled natural wonders and extraordinary outdoor experiences.`,
                        price: 900000,
                        city_id: "5879092"
                        // desimages:['../images/alaskaimg1.jpg','../images/alaskaimg2.jpg','../images/alaskaimg3.jpg','../images/alaskaimg4.jpg']
                },
                Netherland: {
                        name: "Netherland",
                        category: "private tour",
                        requirements: ["Passport", "Visa"],
                        pickup: ["islamabad"],
                        durations: "3 days 4 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://media.timeout.com/images/106034581/image.jpg",
                        people: "couple only",
                        overview: `The Netherlands, a traveler's paradise, entices with its enchanting landscapes and cultural treasures. Immerse in the iconic beauty of Amsterdam's historic canals, tulip-filled fields, and charming windmills. Discover the rich artistic heritage, with world-class museums showcasing masterpieces by Dutch masters. The Netherlands' bike-friendly cities offer an eco-friendly way to explore, while picturesque villages like Giethoorn and Zaanse Schans provide a glimpse into traditional Dutch life. With its blend of scenic allure and cultural richness, the Netherlands promises an unforgettable journey for those seeking vibrant cities and idyllic countryside escapes.`,
                        price: 782170,
                        city_id: "2759794"
                        // desimages:['../images/Netherlandimg1.jpg','../images/Netherlandimg2.jpg','../images/Netherlandimg3.jpg','../images/Netherlandimg4.jpg']
                },
                London: {
                        name: "London",
                        category: "private tour",
                        requirements: ["Passport", "Visa"],
                        pickup: ["Islamabad"],
                        durations: "7 days 8 nights",
                        means: "By air",
                        food: "Food available on demand",
                        refund: "The refund (if any) will be processed in 2 working days after approval.",
                        note: "To book tour and see prices click on buy",
                        img_src: "https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg",
                        people: "Anyone",
                        overview: `London, a global metropolis, beckons exploration with its timeless allure. Discover a rich tapestry of history through iconic landmarks like the Tower of London and Buckingham Palace. Immerse in diverse cultural experiences, from world-class museums like the British Museum to the vibrant West End theaters. Explore the charming neighborhoods, each with its unique character, and savor diverse culinary delights in this cosmopolitan hub. London's seamless blend of tradition and modernity, along with its extensive parks and the River Thames, creates an enchanting canvas for unforgettable travel experiences.`,
                        price: 782567,
                        city_id: "4119617"
                        // desimages:['../images/londonimg1.jpg','../images/londonimg2.jpg','../images/londonimg3.jpg','../images/londonimg4.jpg']
                }
        }



        return (
                <>
                        <maindata.Provider value={desData}>
                                <Router>
                                        <Navbar handleNavigate={handleNavigate} />
                                        <Routes>
                                                {/* <Route path="/" render={()=>{return(<><Body1/></>)} }/> */}
                                                <Route path="/" element={<Body1 user_reviews={user_reviews} />} />

                                                <Route path="destinations" element={<Destinations />} />
                                                <Route path="destinations/buy" element={<Buypage />} />
                                                <Route path="faqs" element={<FAQS FAQsQA={FAQsQA} />} />
                                                <Route path="about" element={<About whereclick={whereclick} />} />


                                        </Routes>
                                        <AppFooter />
                                </Router>
                        </maindata.Provider>
                </>
        )

}
export default App;

// let http = require('http');
// http.createServer(function (req, res) {
//     res.write('hello from server');//write a response to the client
//     res.end();//end of response from server
// }).listen(3000);//the server instance listens for http requests on port 6000
