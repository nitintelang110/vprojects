import {Tabs }from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Some random content From Out Side From Any Component- Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi culpa, explicabo</h1>;
}

export const TabTest=()=> {
  const tabs = [
    {
      label: "Tab 1",
      content: <div><h1>This is content for Tab 1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi culpa, explicabo corrupti dolor maxime. Sapiente aut inventore repellat atque perspiciatis? Doloribus, id! Rem quia dolor sit corporis unde ducimus necessitatibus illum harum, facilis natus et molestiae minima odio enim inventore ipsa. Nobis accusantium ipsam labore perspiciatis beatae, pariatur eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi culpa, explicabo corrupti dolor maxime. Sapiente aut inventore repellat atque perspiciatis? Doloribus, id! Rem quia dolor sit corporis unde ducimus necessitatibus illum harum, facilis natus et molestiae minima odio enim inventore ipsa. Nobis  accusantium ipsam labore perspiciatis beatae, pariatur eligendi.</p></div>,
    },
    {
      label: "Tab 2",
      content: <div><h2>This is content for Tab 2</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi culpa, explicabo corrupti dolor maxime. Sapiente aut inventore repellat atque perspiciatis? Doloribus, id! Rem quia dolor sit corporis unde ducimus necessitatibus illum harum, facilis natus et molestiae minima odio enim inventore ipsa. Nobis accusantium ipsam labore perspiciatis beatae, pariatur eligendi.elit. In sequi culpa, explicabo corrupti dolor maxime. Sapiente aut inventore repellat atque perspiciatis? Doloribus, id! Rem quia dolor sit corporis unde ducimus necessitatibus illum harum, facilis natus et molestiae minima odio enim inventore ipsa. Nobis accusantium ipsam labore perspiciatis beatae, pariatur eligendi</p></div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
