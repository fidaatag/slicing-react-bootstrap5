import React from 'react'
import CompNavbar from './component/ComNavbar'
import LayoutViewCom from './component/LayoutViewCom'
import Circle from './component/view/section_1/Circle';
import Rectangle from './component/view/section_1/Rectangle';
import Square from './component/view/section_1/Square';
import Solid from './component/view/section_2/Solid';
import Text from './component/view/section_2/Text';

const App = () => {

  const section1 = [
    { component: Circle, label: "Circle Image" },
    { component: Rectangle, label: "Rectangle Image" },
    { component: Square, label: "Square Image" },
  ];

  const section2 = [
    { component: Solid, label: "Solid Button" },
    { component: Text, label: "Text Button" },
  ]
  return (
    <>
      <CompNavbar />
      <LayoutViewCom components={section1} section={"1"} />
      <LayoutViewCom components={section2} section={"2"} />
    </>
  );
}

export default App