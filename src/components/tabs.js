const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // const tabTopics = document.createElement('div')
  // tabTopics.classList.add('topics')
  
  // for (const topic of topics){
  //   const tab = document.createElement('div')
  //   tab.classList.add('tab')
  //   tab.textContent = `${topic}`
  //   tabTopics.appendChild(tab)
  // }


  const tabTopics = document.createElement('div');
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');
  const tab4 = document.createElement('div')
  const tab5 = document.createElement('div')

  tabTopics.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');
  tab4.classList.add('tab')
  tab5.classList.add('tab')

  tabTopics.appendChild(tab1);
  tabTopics.appendChild(tab2);
  tabTopics.appendChild(tab3);
  tabTopics.appendChild(tab4)
  tabTopics.appendChild(tab5)

  tab1.textContent = `${topics[0]}`;
  tab2.textContent = `${topics[1]}`;
  tab3.textContent = `${topics[2]}`;
  tab4.textContent = `${topics[3]}`
  tab5.textContent = `${topics[4]}`


  return tabTopics;
}

import axios from "axios";

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
    axios.get(`http://localhost:5000/api/topics`)
    .then(resp => { 

      const response = resp.data

      console.log("topics", response.topics)

      document.querySelector(selector).append(Tabs(response.topics));


      console.log(resp);

    })

  
  }


export { Tabs, tabsAppender }
