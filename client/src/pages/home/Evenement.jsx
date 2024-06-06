import React from "react";
import './Home.css';
import { Navbar } from "./Navbar";
import { Buttom } from './Buttom';
import cs4es from './../../assets/cs4es.png';
import jfce from './../../assets/jfce.png';
import cshack from './../../assets/cshack.png';

export const Evenement=()=>{
    return (
        <div>
            <Navbar/>
            <div className="event_container">
                <div className="event_box">
                    <img src={cs4es} alt="Image de L'événement  cs4es"/>
                    <p>La première édition du Computer Science for Enterprise Summit, ou CS4E, arrive ! 

                        Rejoignez-nous le 3 mars  pour une journée riche en discussions, idées novatrices, défis et réseautage 
                        avec les leaders de l'industrie. 

                        Explorez les dernières tendances et avancées en informatique d'entreprise. Écoutez des intervenants partager 
                        leurs visions et conseils pour propulser votre carrière. Le CS4E a quelque chose à offrir à chacun.

                        Ne manquez pas cette opportunité de vous connecter, d'apprendre et de grandir lors du Computer Science for 
                        Enterprise Summit ! 
                    </p>
                </div>
                <div className="event_box">
                    <img src={cshack} alt="Image de L'événement  CSHACK"/>
                    <p>L'événement CSHack est un hackathon captivant dédié à la cybersécurité, prévu les 24 et 25 février à la pépinière d'entreprise de Mahdia.
                        Destiné aux passionnés de cybersécurité et aux amateurs de résolution de problèmes, cet événement offre une immersion totale dans le 
                        monde de la défense numérique. Les participants pourront assister à des ateliers, relever des défis et bénéficier d'opportunités de 
                        réseautage, tout en développant leurs compétences en cybersécurité.

                        Que vous soyez un professionnel aguerri ou un novice curieux, CSHack a quelque chose à offrir à chacun. Cet événement est une occasion 
                        unique de rencontrer des experts du secteur, de tester vos capacités de résolution de problèmes et de repartir avec des connaissances 
                        et une inspiration pour affronter les menaces cybernétiques de demain. Ne manquez pas cette opportunité de vous joindre à la révolution 
                        de la cybersécurité à CSHack.
                    </p>
                </div>
                <div className="event_box">
                    <img src={jfce} alt="Image de journée de  festival de la créativité étudiante"/>
                    <p>Le journée festival de la créativité étudiante, 
                    désormais dans sa huitième édition, est prévu pour
                     février et promet d'être une célébration vibrante de 
                     l'ingéniosité et du talent des étudiants. Cet événement 
                     annuel rassemble des étudiants de divers horizons pour 
                     participer à des activités enrichissantes et divertissantes, 
                     notamment des tournois de ping-pong et des compétitions de robotique.

                    Les étudiants auront l'occasion de démontrer leurs compétences techniques, 
                    leur esprit d'équipe et leur créativité. En plus des compétitions, le festival 
                    propose des ateliers, des expositions et des présentations de projets innovants. 
                    C'est une plateforme exceptionnelle pour réseauter, partager des idées et célébrer 
                    la diversité des talents universitaires.

                    Rejoignez-nous pour une semaine de découvertes, de défis et de célébrations au Festival 
                    de la créativité étudiante, où l'ingéniosité et l'enthousiasme des jeunes esprits sont à 
                    l'honneur.
                        </p>
                    </div>
                    
                    
            </div>
            <Buttom/>
        </div>
    )
}