import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <body>
      <h1>Welcome in my house of books!</h1>
      <h4>It consist of sharing with you somes good books and giving you their sommary !</h4>
      <div>
      		<p class="flotte">
			<img 
    			src="http://www.buzz-litteraire.com/wp-content/uploads/2015/01/le-loup-des-steppes-herman-hesse-critique-litteraire-analyse-citations.jpg"
    			alt="Steppenwolf from Herman Hesse"
    			height="228px" 
    			width="228px"
    			align="absmiddle" 
			/>
			</p>
			<p class="title">Steppenwolf from Herman HESSE</p>
			<p class="texte"> Steppenwolf from Herman Hesse is one of my favorite novel.
			Here is a sommary : Steppenwolf is a poetical self-portrait of a man who felt himself to be half-human and half-wolf. This Faust-like and magical story is evidence of Hesse's searching philosophy and extraordinary sense of humanity as he tells of the humanization of a middle-aged misanthrope. Yet this novel can also be seen as a plea for rigorous self-examination and an indictment of the intellectual hypocrisy of the period. As Hesse himself remarked, "Of all my books Steppenwolf is the one that was more often and more violently misunderstood than any other".(From the website Goodreads)
			</p>
			
       </div>
       <div>
      	<p class="flotte">
      		<img 
      			src="https://pictures.abebooks.com/isbn/9780330246293-uk-300.jpg"
      			alt="Hunger from Knut HAMSON"
    			height="300px" 
    			width="247px"
    			align="absmiddle" 
			/>
      	</p>
      	<p class="title">Hunger from Knut HAMSON</p>
      	<p class="texte"> "Hunger" is a really powerful book me think about the limits of madness.  One of the most important and controversial writers of the 20th century, Knut Hamsun made literary history with the publication in 1890 of this powerful, autobiographical novel recounting the abject poverty, hunger and despair of a young writer struggling to achieve self-discovery and its ultimate artistic expression. The book brilliantly probes the psychodynamics of alienation and obsession, painting an unforgettable portrait of a man driven by forces beyond his control to the edge of self-destruction. Hamsun influenced many of the major 20th-century writers who followed him, including Kafka, Joyce and Henry Miller. Required reading in world literature courses, the highly influential, landmark novel will also find a wide audience among lovers of books that probe the "unexplored crannies in the human soul" (George Egerton)</p>
      </div>
    </body>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
