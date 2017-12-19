import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <body>
      <h1>Welcome to my project!</h1>
      <h4>It consist of sharing with you somes good books and giving you their sommary !</h4>
      <div>
			<img
    			src="http://www.buzz-litteraire.com/wp-content/uploads/2015/01/le-loup-des-steppes-herman-hesse-critique-litteraire-analyse-citations.jpg"
    			alt="Steppenwolf from Herman Hesse"
    			height="228px" 
    			width="228px"
    			align="absmiddle" 
			/>
			<p>Steppenwolf from Herman Hesse is one of my favorite novel.
			Here is a sommary : Steppenwolf is a poetical self-portrait of a man who felt himself to be half-human and half-wolf. This Faust-like and magical story is evidence of Hesse's searching philosophy and extraordinary sense of humanity as he tells of the humanization of a middle-aged misanthrope. Yet this novel can also be seen as a plea for rigorous self-examination and an indictment of the intellectual hypocrisy of the period. As Hesse himself remarked, "Of all my books Steppenwolf is the one that was more often and more violently misunderstood than any other".(From the website Goodreads)
			</p>
			
      </div>
      <div>
      </div>
    </body>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
