import React from "react"
//import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
//import katie from "./components/katie-zaferes.png";
//import wedding from "./components/wedding-photography.png";
//import bike from "./components/mountain-bike.png";
import data from "./components/data";
//import Contact from "./components/contact";
//import image from "./components/fluffykins.png";
//import image1 from "./components/mr-whiskerson.png"
//import image2 from "./components/felix.png"
//import image3 from "./components/pumpkin.png"
//import jokesData from "./components/jokesData";
import './index.css';
export default function App() {
    const cardData = data.map(info=>{
        return(
            
            <Card 
            key={info.id}
            {...info}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
            {cardData}
            </section>
            
        </div>
    )
    
 










    /*const jokeElements = jokesData.map(joke => {
        return <Jokes setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )*/
    /*<div>
        <Jokes 
        setup="I got my daughter a fridge for her birthday."
        punchline= "I can't wait to see her face light up when she opens it."
        
        />

        <Jokes 
        setup= "How did the hacker escape the police?"
        punchline= "He just ransomware!"

        />

        <Jokes 
        setup= "Why don't pirates travel on mountain roads?"
        punchline= "Scurvy."

        />

        <Jokes 
        setup= "Why do bees stay in the hive in the winter?"
        punchline= "Swarm."

        />

        <Jokes 
        setup= "What's the best thing about Switzerland?"
        punchline= "I don't know, but the flag is a big plus!"

        />
        
    </div>*/
    /*<div>
        <Navbar />
        <Hero />
        <Card 
        img={katie}
        name="Katie Zaferes"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
        />
    </div>*/
    /*<div className="contacts">
            <Contact 
                img={image1} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={image}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={image2}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={image3}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>*/
    
}