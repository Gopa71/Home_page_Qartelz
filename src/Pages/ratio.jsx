import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";





const RaTio = () => {

 
  const TlduBa1 = localStorage.getItem('TlduBa1');
  const TlduBa2 = localStorage.getItem('TlduBa2');
  const TlduBa3 = localStorage.getItem('TlduBa3');
  const TlduBa4 = localStorage.getItem('TlduBa4');
  const TlduBa5 = localStorage.getItem('TlduBa5');
  const TlduBa6 = localStorage.getItem('TlduBa6');
  const TlduBa7 = localStorage.getItem('TlduBa7');
  const TlduBa8 = localStorage.getItem('TlduBa8');
  

  
  const[PbdInt1,setPbdInt1] = useState('');
  const[PbdInt2,setPbdInt2] = useState('');
  const[PbdInt3,setPbdInt3] = useState('');
  const[PbdInt4,setPbdInt4] = useState('');
  const[PbdInt5,setPbdInt5] = useState('');
  const[PbdInt6,setPbdInt6] = useState('');
  const[PbdInt7,setPbdInt7] = useState('');
  const[PbdInt8,setPbdInt8] = useState('');

  









  
  const[BaFiCuAs1,setBaFiCuAs1] = useState('');
  const[BaFiCuAs2,setBaFiCuAs2] = useState('');
  const[BaFiCuAs3,setBaFiCuAs3] = useState('');
  const[BaFiCuAs4,setBaFiCuAs4] = useState('');
  const[BaFiCuAs5,setBaFiCuAs5] = useState('');
  const[BaFiCuAs6,setBaFiCuAs6] = useState('');
  const[BaFiCuAs7,setBaFiCuAs7] = useState('');
  const[BaFiCuAs8,setBaFiCuAs8] = useState('');


  
  const[InRecSa1,setInRecSa1] = useState('');
  const[InRecSa2,setInRecSa2] = useState('');
  const[InRecSa3,setInRecSa3] = useState('');
  const[InRecSa4,setInRecSa4] = useState('');
  const[InRecSa5,setInRecSa5] = useState('');
  const[InRecSa6,setInRecSa6] = useState('');
  const[InRecSa7,setInRecSa7] = useState('');
  const[InRecSa8,setInRecSa8] = useState('');

  





  



  
  const[InDeBaBo2,setInDeBaBo2] = useState('');
  const[InDeBaBo3,setInDeBaBo3] = useState('');
  const[InDeBaBo4,setInDeBaBo4] = useState('');
  const[InDeBaBo5,setInDeBaBo5] = useState('');
  const[InDeBaBo6,setInDeBaBo6] = useState('');
  const[InDeBaBo7,setInDeBaBo7] = useState('');
  const[InDeBaBo8,setInDeBaBo8] = useState('');

  




  
  const[ToBaBor1,setToBaBor1] = useState('');
  const[ToBaBor2,setToBaBor2] = useState('');
  const[ToBaBor3,setToBaBor3] = useState('');
  const[ToBaBor4,setToBaBor4] = useState('');
  const[ToBaBor5,setToBaBor5] = useState('');
  const[ToBaBor6,setToBaBor6] = useState('');
  const[ToBaBor7,setToBaBor7] = useState('');
  const[ToBaBor8,setToBaBor8] = useState('');

  





  

  const[NePrTnw1,setNePrTnw1] = useState('');
  const[NePrTnw2,setNePrTnw2] = useState('');
  const[NePrTnw3,setNePrTnw3] = useState('');
  const[NePrTnw4,setNePrTnw4] = useState('');
  const[NePrTnw5,setNePrTnw5] = useState('');
  const[NePrTnw6,setNePrTnw6] = useState('');
  const[NePrTnw7,setNePrTnw7] = useState('');
  const[NePrTnw8,setNePrTnw8] = useState('');

  

  const[SaTnw1,setSaTnw1] = useState('');
  const[SaTnw2,setSaTnw2] = useState('');
  const[SaTnw3,setSaTnw3] = useState('');
  const[SaTnw4,setSaTnw4] = useState('');
  const[SaTnw5,setSaTnw5] = useState('');
  const[SaTnw6,setSaTnw6] = useState('');
  const[SaTnw7,setSaTnw7] = useState('');
  const[SaTnw8,setSaTnw8] = useState('');






















  
  const[OpCoSal1,setOpCoSal1] = useState('');
  const[OpCoSal2,setOpCoSal2] = useState('');
  const[OpCoSal3,setOpCoSal3] = useState('');
  const[OpCoSal4,setOpCoSal4] = useState('');
  const[OpCoSal5,setOpCoSal5] = useState('');
  const[OpCoSal6,setOpCoSal6] = useState('');
  const[OpCoSal7,setOpCoSal7] = useState('');
  const[OpCoSal8,setOpCoSal8] = useState('');
  

  

  const[NePrSa1,setNePrSa1] = useState('');
  const[NePrSa2,setNePrSa2] = useState('');
  const[NePrSa3,setNePrSa3] = useState('');
  const[NePrSa4,setNePrSa4] = useState('');
  const[NePrSa5,setNePrSa5] = useState('');
  const[NePrSa6,setNePrSa6] = useState('');
  const[NePrSa7,setNePrSa7] = useState('');
  const[NePrSa8,setNePrSa8] = useState('');


  




  
  const[PbdSa1,setPbdSa1] = useState('');
  const[PbdSa2,setPbdSa2] = useState('');
  const[PbdSa3,setPbdSa3] = useState('');
  const[PbdSa4,setPbdSa4] = useState('');
  const[PbdSa5,setPbdSa5] = useState('');
  const[PbdSa6,setPbdSa6] = useState('');
  const[PbdSa7,setPbdSa7] = useState('');
  const[PbdSa8,setPbdSa8] = useState('');





  const[RiFaSa2,setRiFaSa2] = useState('');
  const[RiFaSa3,setRiFaSa3] = useState('');
  const[RiFaSa4,setRiFaSa4] = useState('');
  const[RiFaSa5,setRiFaSa5] = useState('');
  const[RiFaSa6,setRiFaSa6] = useState('');
  const[RiFaSa7,setRiFaSa7] = useState('');
  const[RiFaSa8,setRiFaSa8] = useState('');





 


  
  const[FuDeTnw1,setFuDeTnw1] = useState('');
  const[FuDeTnw2,setFuDeTnw2] = useState('');
  const[FuDeTnw3,setFuDeTnw3] = useState('');
  const[FuDeTnw4,setFuDeTnw4] = useState('');
  const[FuDeTnw5,setFuDeTnw5] = useState('');
  const[FuDeTnw6,setFuDeTnw6] = useState('');
  const[FuDeTnw7,setFuDeTnw7] = useState('');
  const[FuDeTnw8,setFuDeTnw8] = useState('');

  
  
useEffect(() => {
  localStorage.setItem("FuDeTnw1", FuDeTnw1);
}, [FuDeTnw1]);
  
useEffect(() => {
  localStorage.setItem("FuDeTnw2", FuDeTnw2);
}, [FuDeTnw2]);

  
useEffect(() => {
  localStorage.setItem("FuDeTnw3", FuDeTnw3);
}, [FuDeTnw3]);

  
useEffect(() => {
  localStorage.setItem("FuDeTnw4", FuDeTnw4);
}, [FuDeTnw4]);
  
useEffect(() => {
  localStorage.setItem("FuDeTnw5", FuDeTnw5);
}, [FuDeTnw5]);

  
useEffect(() => {
  localStorage.setItem("FuDeTnw6", FuDeTnw6);
}, [FuDeTnw6]);

  
useEffect(() => {
  localStorage.setItem("FuDeTnw7", FuDeTnw7);
}, [FuDeTnw7]);

  
useEffect(() => {
  localStorage.setItem("FuDeTnw8", FuDeTnw8);
}, [FuDeTnw8]);







  
   
  const OthTerLib1 = localStorage.getItem('OthTerLib1');
  const OthTerLib2 = localStorage.getItem('OthTerLib2');
  const OthTerLib3 = localStorage.getItem('OthTerLib3');
  const OthTerLib4 = localStorage.getItem('OthTerLib4');
  const OthTerLib5 = localStorage.getItem('OthTerLib5');
  const OthTerLib6 = localStorage.getItem('OthTerLib6');
  const OthTerLib7 = localStorage.getItem('OthTerLib7');
  const OthTerLib8 = localStorage.getItem('OthTerLib8');





  
  const[ToTnQu1,setToTnQu1] = useState('');
  const[ToTnQu2,setToTnQu2] = useState('');
  const[ToTnQu3,setToTnQu3] = useState('');
  const[ToTnQu4,setToTnQu4] = useState('');
  const[ToTnQu5,setToTnQu5] = useState('');
  const[ToTnQu6,setToTnQu6] = useState('');
  const[ToTnQu7,setToTnQu7] = useState('');
  const[ToTnQu8,setToTnQu8] = useState('');

  
useEffect(() => {
  localStorage.setItem("ToTnQu1", ToTnQu1);
}, [ToTnQu1]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu2", ToTnQu2);
}, [ToTnQu2]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu3", ToTnQu3);
}, [ToTnQu3]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu4", ToTnQu4);
}, [ToTnQu4]);


  
useEffect(() => {
  localStorage.setItem("ToTnQu5", ToTnQu5);
}, [ToTnQu5]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu6", ToTnQu6);
}, [ToTnQu6]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu7", ToTnQu7);
}, [ToTnQu7]);

  
useEffect(() => {
  localStorage.setItem("ToTnQu8", ToTnQu8);
}, [ToTnQu8]);

















  


  

  
  const[TolTnw1,setTolTnw1] = useState('');
  const[TolTnw2,setTolTnw2] = useState('');
  const[TolTnw3,setTolTnw3] = useState('');
  const[TolTnw4,setTolTnw4] = useState('');
  const[TolTnw5,setTolTnw5] = useState('');
  const[TolTnw6,setTolTnw6] = useState('');
  const[TolTnw7,setTolTnw7] = useState('');
  const[TolTnw8,setTolTnw8] = useState('');

  useEffect(() => {
    localStorage.setItem("TolTnw1", TolTnw1);
  }, [TolTnw1]);

  useEffect(() => {
    localStorage.setItem("TolTnw2", TolTnw2);
  }, [TolTnw2]);
  
  useEffect(() => {
    localStorage.setItem("TolTnw3", TolTnw3);
  }, [TolTnw3]);
  
  useEffect(() => {
    localStorage.setItem("TolTnw4", TolTnw4);
  }, [TolTnw4]);
  useEffect(() => {
    localStorage.setItem("TolTnw5", TolTnw5);
  }, [TolTnw5]);
  useEffect(() => {
    localStorage.setItem("TolTnw6", TolTnw6);
  }, [TolTnw6]);
  useEffect(() => {
    localStorage.setItem("TolTnw7", TolTnw7);
  }, [TolTnw7]);
  useEffect(() => {
    localStorage.setItem("TolTnw8", TolTnw8);
  }, [TolTnw8]);



  


  
  const[CuRa1,setCuRa1] = useState('');
  const[CuRa2,setCuRa2] = useState('');
  const[CuRa3,setCuRa3] = useState('');
  const[CuRa4,setCuRa4] = useState('');
  const[CuRa5,setCuRa5] = useState('');
  const[CuRa6,setCuRa6] = useState('');
  const[CuRa7,setCuRa7] = useState('');
  const[CuRa8,setCuRa8] = useState('');

  useEffect(() => {
    localStorage.setItem("CuRa1", CuRa1);
  }, [CuRa1]);
  useEffect(() => {
    localStorage.setItem("CuRa2", CuRa2);
  }, [CuRa2]);
  useEffect(() => {
    localStorage.setItem("CuRa3", CuRa3);
  }, [CuRa3]);
  useEffect(() => {
    localStorage.setItem("CuRa4", CuRa4);
  }, [CuRa4]);
  useEffect(() => {
    localStorage.setItem("CuRa5", CuRa5);
  }, [CuRa5]);
  useEffect(() => {
    localStorage.setItem("CuRa6", CuRa6);
  }, [CuRa6]);
  useEffect(() => {
    localStorage.setItem("CuRa7", CuRa7);
  }, [CuRa7]);
  useEffect(() => {
    localStorage.setItem("CuRa8", CuRa8);
  }, [CuRa8]);















  const[NewoCa1,setNewoCa1] = useState('');
  const[NewoCa2,setNewoCa2] = useState('');
  const[NewoCa3,setNewoCa3] = useState('');
  const[NewoCa4,setNewoCa4] = useState('');
  const[NewoCa5,setNewoCa5] = useState('');
  const[NewoCa6,setNewoCa6] = useState('');
  const[NewoCa7,setNewoCa7] = useState('');
  const[NewoCa8,setNewoCa8] = useState('');

  useEffect(() => {
    localStorage.setItem("NewoCa1", NewoCa1);
  }, [NewoCa1]);

  useEffect(() => {
    localStorage.setItem("NewoCa2", NewoCa2);
  }, [NewoCa2]);
  
  useEffect(() => {
    localStorage.setItem("NewoCa3", NewoCa3);
  }, [NewoCa3]);
  
  useEffect(() => {
    localStorage.setItem("NewoCa4", NewoCa4);
  }, [NewoCa4]);
  useEffect(() => {
    localStorage.setItem("NewoCa5", NewoCa5);
  }, [NewoCa5]);
  useEffect(() => {
    localStorage.setItem("NewoCa6", NewoCa6);
  }, [NewoCa6]);
  useEffect(() => {
    localStorage.setItem("NewoCa7", NewoCa7);
  }, [NewoCa7]);
  useEffect(() => {
    localStorage.setItem("NewoCa8", NewoCa8);
  }, [NewoCa8]);
  
  
  
  
  
  
  

  
  const[InDec2,setInDec2] = useState('');
  const[InDec3,setInDec3] = useState('');
  const[InDec4,setInDec4] = useState('');
  const[InDec5,setInDec5] = useState('');
  const[InDec6,setInDec6] = useState('');
  const[InDec7,setInDec7] = useState('');
  const[InDec8,setInDec8] = useState('');




const sumInDec2 = () => {
  try {
   
    const result = eval(`  (${NewoCa2 || 0} - ${NewoCa1 || 0}) `);
    setInDec2(result);
  } catch (error) {
    setInDec2("Input all ");  
  }
};

useEffect(() => {
  sumInDec2();
}, [NewoCa2,NewoCa1]);


const sumInDec3 = () => {
  try {
   
    const result = eval(`  (${NewoCa3 || 0} - ${NewoCa2 || 0}) `);
    setInDec3(result);
  } catch (error) {
    setInDec3("Input all ");  
  }
};

useEffect(() => {
  sumInDec3();
}, [NewoCa3,NewoCa2]);


const sumInDec4 = () => {
  try {
   
    const result = eval(`  (${NewoCa4 || 0} - ${NewoCa3 || 0}) `);
    setInDec4(result);
  } catch (error) {
    setInDec4("Input all ");  
  }
};

useEffect(() => {
  sumInDec4();
}, [NewoCa4,NewoCa3]);


const sumInDec5 = () => {
  try {
   
    const result = eval(`  (${NewoCa5 || 0} - ${NewoCa4 || 0}) `);
    setInDec5(result);
  } catch (error) {
    setInDec5("Input all ");  
  }
};

useEffect(() => {
  sumInDec5();
}, [NewoCa5,NewoCa4]);


const sumInDec6 = () => {
  try {
   
    const result = eval(`  (${NewoCa6 || 0} - ${NewoCa5 || 0}) `);
    setInDec6(result);
  } catch (error) {
    setInDec6("Input all ");  
  }
};

useEffect(() => {
  sumInDec6();
}, [NewoCa6,NewoCa5]);


const sumInDec7 = () => {
  try {
   
    const result = eval(`  (${NewoCa7 || 0} - ${NewoCa6 || 0}) `);
    setInDec7(result);
  } catch (error) {
    setInDec7("Input all ");  
  }
};

useEffect(() => {
  sumInDec7();
}, [NewoCa7,NewoCa6]);


const sumInDec8 = () => {
  try {
   
    const result = eval(`  (${NewoCa8 || 0} - ${NewoCa7 || 0}) `);
    setInDec8(result);
  } catch (error) {
    setInDec8("Input all ");  
  }
};

useEffect(() => {
  sumInDec8();
}, [NewoCa8,NewoCa7]);








  






  
  const[ToTnAdj1,setToTnAdj1] = useState('');
  const[ToTnAdj2,setToTnAdj2] = useState('');
  const[ToTnAdj3,setToTnAdj3] = useState('');
  const[ToTnAdj4,setToTnAdj4] = useState('');
  const[ToTnAdj5,setToTnAdj5] = useState('');
  const[ToTnAdj6,setToTnAdj6] = useState('');
  const[ToTnAdj7,setToTnAdj7] = useState('');
  const[ToTnAdj8,setToTnAdj8] = useState('');

  
useEffect(() => {
  localStorage.setItem("ToTnAdj1", ToTnAdj1);
}, [ToTnAdj1]);

useEffect(() => {
  localStorage.setItem("ToTnAdj2", ToTnAdj2);
}, [ToTnAdj2]);

useEffect(() => {
  localStorage.setItem("ToTnAdj3", ToTnAdj3);
}, [ToTnAdj3]);
useEffect(() => {
  localStorage.setItem("ToTnAdj4", ToTnAdj4);
}, [ToTnAdj4]);
useEffect(() => {
  localStorage.setItem("ToTnAdj5", ToTnAdj5);
}, [ToTnAdj5]);
useEffect(() => {
  localStorage.setItem("ToTnAdj6", ToTnAdj6);
}, [ToTnAdj6]);
useEffect(() => {
  localStorage.setItem("ToTnAdj7", ToTnAdj7);
}, [ToTnAdj7]);
useEffect(() => {
  localStorage.setItem("ToTnAdj8", ToTnAdj8);
}, [ToTnAdj8]);




  



  
  const raMa1 = localStorage.getItem('raMa1');
  const raMa2 = localStorage.getItem('raMa2');
  const raMa3 = localStorage.getItem('raMa3');
  const raMa4 = localStorage.getItem('raMa4');
  const raMa5 = localStorage.getItem('raMa5');
  const raMa6 = localStorage.getItem('raMa6');
  const raMa7 = localStorage.getItem('raMa7');
  const raMa8 = localStorage.getItem('raMa8');

  
  const stkInPr1 = localStorage.getItem('stkInPr1');
  const stkInPr2 = localStorage.getItem('stkInPr2');
  const stkInPr3 = localStorage.getItem('stkInPr3');
  const stkInPr4 = localStorage.getItem('stkInPr4');
  const stkInPr5 = localStorage.getItem('stkInPr5');
  const stkInPr6 = localStorage.getItem('stkInPr6');
  const stkInPr7 = localStorage.getItem('stkInPr7');
  const stkInPr8 = localStorage.getItem('stkInPr8');

  
  const FinishGo1 = localStorage.getItem('FinishGo1');
  const FinishGo2 = localStorage.getItem('FinishGo1');
  const FinishGo3 = localStorage.getItem('FinishGo1');
  const FinishGo4 = localStorage.getItem('FinishGo1');
  const FinishGo5 = localStorage.getItem('FinishGo1');
  const FinishGo6 = localStorage.getItem('FinishGo1');
  const FinishGo7 = localStorage.getItem('FinishGo1');
  const FinishGo8 = localStorage.getItem('FinishGo1');

  

  const conSuSp1 = localStorage.getItem('conSuSp1');
  const conSuSp2 = localStorage.getItem('conSuSp1');
  const conSuSp3 = localStorage.getItem('conSuSp1');
  const conSuSp4 = localStorage.getItem('conSuSp1');
  const conSuSp5 = localStorage.getItem('conSuSp1');
  const conSuSp6 = localStorage.getItem('conSuSp1');
  const conSuSp7 = localStorage.getItem('conSuSp1');
  const conSuSp8 = localStorage.getItem('conSuSp1');

  
  const TrDeb1 = localStorage.getItem('TrDeb1');
  const TrDeb2 = localStorage.getItem('TrDeb2');
  const TrDeb3 = localStorage.getItem('TrDeb3');
  const TrDeb4 = localStorage.getItem('TrDeb4');
  const TrDeb5 = localStorage.getItem('TrDeb5');
  const TrDeb6 = localStorage.getItem('TrDeb6');
  const TrDeb7 = localStorage.getItem('TrDeb7');
  const TrDeb8 = localStorage.getItem('TrDeb8');






  
  const wcBrIob1 = localStorage.getItem('wcBrIob1');
  const wcBrIob2 = localStorage.getItem('wcBrIob2');
  const wcBrIob3 = localStorage.getItem('wcBrIob3');
  const wcBrIob4 = localStorage.getItem('wcBrIob4');
  const wcBrIob5 = localStorage.getItem('wcBrIob5');
  const wcBrIob6 = localStorage.getItem('wcBrIob6');
  const wcBrIob7 = localStorage.getItem('wcBrIob7');
  const wcBrIob8 = localStorage.getItem('wcBrIob8');

  
  const WcFrBI1 = localStorage.getItem('WcFrBI1');
  const WcFrBI2 = localStorage.getItem('WcFrBI2');
  const WcFrBI3 = localStorage.getItem('WcFrBI3');
  const WcFrBI4 = localStorage.getItem('WcFrBI4');
  const WcFrBI5 = localStorage.getItem('WcFrBI5');
  const WcFrBI6 = localStorage.getItem('WcFrBI6');
  const WcFrBI7 = localStorage.getItem('WcFrBI7');
  const WcFrBI8 = localStorage.getItem('WcFrBI8');





  


  



  
  const[TnwQuEq1,setTnwQuEq1] = useState('');
  const[TnwQuEq2,setTnwQuEq2] = useState('');
  const[TnwQuEq3,setTnwQuEq3] = useState('');
  const[TnwQuEq4,setTnwQuEq4] = useState('');
  const[TnwQuEq5,setTnwQuEq5] = useState('');
  const[TnwQuEq6,setTnwQuEq6] = useState('');
  const[TnwQuEq7,setTnwQuEq7] = useState('');
  const[TnwQuEq8,setTnwQuEq8] = useState('');

 

  






  


  
  const[TwQuEq1,setTwQuEq1] = useState('');
  const[TwQuEq2,setTwQuEq2] = useState('');
  const[TwQuEq3,setTwQuEq3] = useState('');
  const[TwQuEq4,setTwQuEq4] = useState('');
  const[TwQuEq5,setTwQuEq5] = useState('');
  const[TwQuEq6,setTwQuEq6] = useState('');
  const[TwQuEq7,setTwQuEq7] = useState('');
  const[TwQuEq8,setTwQuEq8] = useState('');

  
  useEffect(() => {
    localStorage.setItem("TwQuEq1", TwQuEq1);
  }, [TwQuEq1]);
   
  useEffect(() => {
    localStorage.setItem("TwQuEq2", TwQuEq2);
  }, [TwQuEq2]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq3", TwQuEq3);
  }, [TwQuEq3]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq4", TwQuEq4);
  }, [TwQuEq4]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq5", TwQuEq5);
  }, [TwQuEq5]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq6", TwQuEq6);
  }, [TwQuEq6]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq7", TwQuEq7);
  }, [TwQuEq7]);

   
  useEffect(() => {
    localStorage.setItem("TwQuEq8", TwQuEq8);
  }, [TwQuEq8]);


  





  



  
  const[IncDec2,setIncDec2] = useState('');
  const[IncDec3,setIncDec3] = useState('');
  const[IncDec4,setIncDec4] = useState('');
  const[IncDec5,setIncDec5] = useState('');
  const[IncDec6,setIncDec6] = useState('');
  const[IncDec7,setIncDec7] = useState('');
  const[IncDec8,setIncDec8] = useState('');

  useEffect(() => {
    localStorage.setItem("IncDec2", IncDec2);
  }, [IncDec2]);
  useEffect(() => {
    localStorage.setItem("IncDec3", IncDec3);
  }, [IncDec3]);
  
  useEffect(() => {
    localStorage.setItem("IncDec4", IncDec4);
  }, [IncDec4]);
  useEffect(() => {
    localStorage.setItem("IncDec5", IncDec5);
  }, [IncDec5]);
  useEffect(() => {
    localStorage.setItem("IncDec6", IncDec6);
  }, [IncDec6]);
  useEffect(() => {
    localStorage.setItem("IncDec7", IncDec7);
  }, [IncDec7]);
  useEffect(() => {
    localStorage.setItem("IncDec8", IncDec8);
  }, [IncDec8]);
  

 

  
  const[TaNeWo1,setTaNeWo1] = useState('');
  const[TaNeWo2,setTaNeWo2] = useState('');
  const[TaNeWo3,setTaNeWo3] = useState('');
  const[TaNeWo4,setTaNeWo4] = useState('');
  const[TaNeWo5,setTaNeWo5] = useState('');
  const[TaNeWo6,setTaNeWo6] = useState('');
  const[TaNeWo7,setTaNeWo7] = useState('');
  const[TaNeWo8,setTaNeWo8] = useState('');

  
  useEffect(() => {
    localStorage.setItem("TaNeWo1", TaNeWo1);
  }, [TaNeWo1]);
   
  useEffect(() => {
    localStorage.setItem("TaNeWo2", TaNeWo2);
  }, [TaNeWo2]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo3", TaNeWo3);
  }, [TaNeWo3]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo4", TaNeWo4);
  }, [TaNeWo4]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo5", TaNeWo5);
  }, [TaNeWo5]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo6", TaNeWo6);
  }, [TaNeWo6]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo7", TaNeWo7);
  }, [TaNeWo7]);

   
  useEffect(() => {
    localStorage.setItem("TaNeWo8", TaNeWo8);
  }, [TaNeWo8]);



  

  const[FiChCoSa1,setFiChCoSa1] = useState('');
  const[FiChCoSa2,setFiChCoSa2] = useState('');
  const[FiChCoSa3,setFiChCoSa3] = useState('');
  const[FiChCoSa4,setFiChCoSa4] = useState('');
  const[FiChCoSa5,setFiChCoSa5] = useState('');
  const[FiChCoSa6,setFiChCoSa6] = useState('');
  const[FiChCoSa7,setFiChCoSa7] = useState('');
  const[FiChCoSa8,setFiChCoSa8] = useState('');





  

  const[SeAdExCo1,setSeAdExCo1] = useState('');
  const[SeAdExCo2,setSeAdExCo2] = useState('');
  const[SeAdExCo3,setSeAdExCo3] = useState('');
  const[SeAdExCo4,setSeAdExCo4] = useState('');
  const[SeAdExCo5,setSeAdExCo5] = useState('');
  const[SeAdExCo6,setSeAdExCo6] = useState('');
  const[SeAdExCo7,setSeAdExCo7] = useState('');
  const[SeAdExCo8,setSeAdExCo8] = useState('');

  
  const[MfgExCo1,setMfgExCo1] = useState('');
  const[MfgExCo2,setMfgExCo2] = useState('');
  const[MfgExCo3,setMfgExCo3] = useState('');
  const[MfgExCo4,setMfgExCo4] = useState('');
  const[MfgExCo5,setMfgExCo5] = useState('');
  const[MfgExCo6,setMfgExCo6] = useState('');
  const[MfgExCo7,setMfgExCo7] = useState('');
  const[MfgExCo8,setMfgExCo8] = useState('');




   







  
  const[NetPrSa1,setNetPrSa1] = useState('');
  const[NetPrSa2,setNetPrSa2] = useState('');
  const[NetPrSa3,setNetPrSa3] = useState('');
  const[NetPrSa4,setNetPrSa4] = useState('');
  const[NetPrSa5,setNetPrSa5] = useState(''); 
  const[NetPrSa6,setNetPrSa6] = useState('');
  const[NetPrSa7,setNetPrSa7] = useState('');
  const[NetPrSa8,setNetPrSa8] = useState('');


  const NeCaAcc1 = localStorage.getItem('NeCaAcc1');
  const NeCaAcc2 = localStorage.getItem('NeCaAcc2');
  const NeCaAcc3 = localStorage.getItem('NeCaAcc3');
  const NeCaAcc4 = localStorage.getItem('NeCaAcc4');
  const NeCaAcc5 = localStorage.getItem('NeCaAcc5');
  const NeCaAcc6 = localStorage.getItem('NeCaAcc6');
  const NeCaAcc7 = localStorage.getItem('NeCaAcc7');
  const NeCaAcc8 = localStorage.getItem('NeCaAcc8');


  
  

  const pBdiT1 = localStorage.getItem('pBdiT1');
  const pBdiT2 = localStorage.getItem('pBdiT2');
  const pBdiT3 = localStorage.getItem('pBdiT3');
  const pBdiT4 = localStorage.getItem('pBdiT4');
  const pBdiT5 = localStorage.getItem('pBdiT5');
  const pBdiT6 = localStorage.getItem('pBdiT6');
  const pBdiT7 = localStorage.getItem('pBdiT7');
  const pBdiT8 = localStorage.getItem('pBdiT8');



  
  const TeLoIo1 = localStorage.getItem('TeLoIo1');
  const TeLoIo2 = localStorage.getItem('TeLoIo2');
  const TeLoIo3 = localStorage.getItem('TeLoIo3');
  const TeLoIo4 = localStorage.getItem('TeLoIo4');
  const TeLoIo5 = localStorage.getItem('TeLoIo5');
  const TeLoIo6 = localStorage.getItem('TeLoIo6');
  const TeLoIo7 = localStorage.getItem('TeLoIo7');
  const TeLoIo8 = localStorage.getItem('TeLoIo8');



  

  const ToOuLi1 = localStorage.getItem('ToOuLi1');
  const ToOuLi2 = localStorage.getItem('ToOuLi2');
  const ToOuLi3 = localStorage.getItem('ToOuLi3');
  const ToOuLi4 = localStorage.getItem('ToOuLi4');
  const ToOuLi5 = localStorage.getItem('ToOuLi5');
  const ToOuLi6 = localStorage.getItem('ToOuLi6');
  const ToOuLi7 = localStorage.getItem('ToOuLi7');
  const ToOuLi8 = localStorage.getItem('ToOuLi8');



  
  const RevRes1 = localStorage.getItem('RevRes1');
  const RevRes2 = localStorage.getItem('RevRes2');
  const RevRes3 = localStorage.getItem('RevRes3');
  const RevRes4 = localStorage.getItem('RevRes4');
  const RevRes5 = localStorage.getItem('RevRes5');
  const RevRes6 = localStorage.getItem('RevRes6');
  const RevRes7 = localStorage.getItem('RevRes7');
  const RevRes8 = localStorage.getItem('RevRes8');



  
  const LoTeLi1 = localStorage.getItem('LoTeLi1');
  const LoTeLi2 = localStorage.getItem('LoTeLi2');
  const LoTeLi3 = localStorage.getItem('LoTeLi3');
  const LoTeLi4 = localStorage.getItem('LoTeLi4');
  const LoTeLi5 = localStorage.getItem('LoTeLi5');
  const LoTeLi6 = localStorage.getItem('LoTeLi6');
  const LoTeLi7 = localStorage.getItem('LoTeLi7');
  const LoTeLi8 = localStorage.getItem('LoTeLi8');



  
  const ToCuAs1 = localStorage.getItem('ToCuAs1');
  const ToCuAs2 = localStorage.getItem('ToCuAs2');
  const ToCuAs3 = localStorage.getItem('ToCuAs3');
  const ToCuAs4 = localStorage.getItem('ToCuAs4');
  const ToCuAs5 = localStorage.getItem('ToCuAs5');
  const ToCuAs6 = localStorage.getItem('ToCuAs6');
  const ToCuAs7 = localStorage.getItem('ToCuAs7');
  const ToCuAs8 = localStorage.getItem('ToCuAs8');

  
  const ToCuLi1 = localStorage.getItem('ToCuLi1');
  const ToCuLi2 = localStorage.getItem('ToCuLi2');
  const ToCuLi3 = localStorage.getItem('ToCuLi3');
  const ToCuLi4 = localStorage.getItem('ToCuLi4');
  const ToCuLi5 = localStorage.getItem('ToCuLi5');
  const ToCuLi6 = localStorage.getItem('ToCuLi6');
  const ToCuLi7 = localStorage.getItem('ToCuLi7');
  const ToCuLi8 = localStorage.getItem('ToCuLi8');






  
  const UnLoPr1 = localStorage.getItem('UnLoPr1');
  const UnLoPr2 = localStorage.getItem('UnLoPr2');
  const UnLoPr3 = localStorage.getItem('UnLoPr3');
  const UnLoPr4 = localStorage.getItem('UnLoPr4');
  const UnLoPr5 = localStorage.getItem('UnLoPr5');
  const UnLoPr6 = localStorage.getItem('UnLoPr6');
  const UnLoPr7 = localStorage.getItem('UnLoPr7');
  const UnLoPr8 = localStorage.getItem('UnLoPr8');



  
  const InLoTo1 = localStorage.getItem('InLoTo1');
  const InLoTo2 = localStorage.getItem('InLoTo2');
  const InLoTo3 = localStorage.getItem('InLoTo3');
  const InLoTo4 = localStorage.getItem('InLoTo4');
  const InLoTo5 = localStorage.getItem('InLoTo5');
  const InLoTo6 = localStorage.getItem('InLoTo6');
  const InLoTo7 = localStorage.getItem('InLoTo7');
  const InLoTo8 = localStorage.getItem('InLoTo8');



  
  const IntFinch = localStorage.getItem('IntFinch');
  const IntFinch2 = localStorage.getItem('IntFinch2');
  const IntFinch3 = localStorage.getItem('IntFinch3');
  const IntFinch4 = localStorage.getItem('IntFinch4');
  const IntFinch5 = localStorage.getItem('IntFinch5');
  const IntFinch6 = localStorage.getItem('IntFinch6');
  const IntFinch7 = localStorage.getItem('IntFinch7');
  const IntFinch8 = localStorage.getItem('IntFinch8');



  

  const NetWo1 = localStorage.getItem('NetWo1');
  const NetWo2 = localStorage.getItem('NetWo2');
  const NetWo3 = localStorage.getItem('NetWo3');
  const NetWo4 = localStorage.getItem('NetWo4');
  const NetWo5 = localStorage.getItem('NetWo5');
  const NetWo6 = localStorage.getItem('NetWo6');
  const NetWo7 = localStorage.getItem('NetWo7');
  const NetWo8 = localStorage.getItem('NetWo8');

  
  const ToIa1 = localStorage.getItem('ToIa1');
  const ToIa2 = localStorage.getItem('ToIa2');
  const ToIa3 = localStorage.getItem('ToIa3');
  const ToIa4 = localStorage.getItem('ToIa4');
  const ToIa5 = localStorage.getItem('ToIa5');
  const ToIa6 = localStorage.getItem('ToIa6');
  const ToIa7 = localStorage.getItem('ToIa7');
  const ToIa8 = localStorage.getItem('ToIa8');




  
  
  const selAdm1 = localStorage.getItem('selAdm1');
  const selAdm2 = localStorage.getItem('selAdm2');
  const selAdm3 = localStorage.getItem('selAdm3');
  const selAdm4 = localStorage.getItem('selAdm4');
  const selAdm5 = localStorage.getItem('selAdm5');
  const selAdm6 = localStorage.getItem('selAdm6');
  const selAdm7 = localStorage.getItem('selAdm7');
  const selAdm8 = localStorage.getItem('selAdm8');



  
  

  const NePrafTa1 = localStorage.getItem('NePrafTa1');
  const NePrafTa2 = localStorage.getItem('NePrafTa2');
  const NePrafTa3 = localStorage.getItem('NePrafTa3');
  const NePrafTa4 = localStorage.getItem('NePrafTa4');
  const NePrafTa5 = localStorage.getItem('NePrafTa5');
  const NePrafTa6 = localStorage.getItem('NePrafTa6');
  const NePrafTa7 = localStorage.getItem('NePrafTa7');
  const NePrafTa8 = localStorage.getItem('NePrafTa8');


  
  const opProLo1 = localStorage.getItem('opProLo1');
  const opProLo2 = localStorage.getItem('opProLo2');
  const opProLo3 = localStorage.getItem('opProLo3');
  const opProLo4 = localStorage.getItem('opProLo4');
  const opProLo5 = localStorage.getItem('opProLo5');
  const opProLo6 = localStorage.getItem('opProLo6');
  const opProLo7 = localStorage.getItem('opProLo7');
  const opProLo8 = localStorage.getItem('opProLo8');

  
  const costsales1 = localStorage.getItem('costsales1');
  const costsales2 = localStorage.getItem('costsales2');
  const costsales3 = localStorage.getItem('costsales3');
  const costsales4 = localStorage.getItem('costsales4');
  const costsales5 = localStorage.getItem('costsales5');
  const costsales6 = localStorage.getItem('costsales6');
  const costsales7 = localStorage.getItem('costsales7');
  const costsales8 = localStorage.getItem('costsales8');

  
  

  const Depre1 = localStorage.getItem('dePre1');
  const Depre2 = localStorage.getItem('dePre2');
  const Depre3 = localStorage.getItem('dePre3');
  const Depre4 = localStorage.getItem('dePre4');
  const Depre5 = localStorage.getItem('dePre5');
  const Depre6 = localStorage.getItem('dePre6');
  const Depre7 = localStorage.getItem('dePre7');
  const Depre8 = localStorage.getItem('dePre8');

  
  const mfDiEx1 = localStorage.getItem('mfDiEx1');
  const mfDiEx2 = localStorage.getItem('mfDiEx2');
  const mfDiEx3 = localStorage.getItem('mfDiEx3');
  const mfDiEx4 = localStorage.getItem('mfDiEx4');
  const mfDiEx5 = localStorage.getItem('mfDiEx5');
  const mfDiEx6 = localStorage.getItem('mfDiEx6');
  const mfDiEx7 = localStorage.getItem('mfDiEx7');
  const mfDiEx8 = localStorage.getItem('mfDiEx8');



  
  const CoOfSa1 = localStorage.getItem('costsales1')
  const CoOfSa2 = localStorage.getItem('costsales2')
  const CoOfSa3 = localStorage.getItem('costsales3')
  const CoOfSa4 = localStorage.getItem('costsales4')
  const CoOfSa5 = localStorage.getItem('costsales5')
  const CoOfSa6 = localStorage.getItem('costsales6')
  const CoOfSa7 = localStorage.getItem('costsales7')
  const CoOfSa8 = localStorage.getItem('costsales8')


  

  const FiGood12 = localStorage.getItem('FiGood12')
  const FiGood13 = localStorage.getItem('FiGood13')
  const FiGood14 = localStorage.getItem('FiGood14')
  const FiGood15 = localStorage.getItem('FiGood15')
  const FiGood16 = localStorage.getItem('FiGood16')
  const FiGood17 = localStorage.getItem('FiGood17')
  const FiGood18 = localStorage.getItem('FiGood18')
  const FiGood19 = localStorage.getItem('FiGood19')
  


  const wrkPo12 = localStorage.getItem('wrkPo12')
  const wrkPo13 = localStorage.getItem('wrkPo13')
  const wrkPo14 = localStorage.getItem('wrkPo14')
  const wrkPo15 = localStorage.getItem('wrkPo15')
  const wrkPo16 = localStorage.getItem('wrkPo16')
  const wrkPo17 = localStorage.getItem('wrkPo17')
  const wrkPo18 = localStorage.getItem('wrkPo18')
  const wrkPo19 = localStorage.getItem('wrkPo19')




  
  const finGo1 = localStorage.getItem('finGo1')
  


  const wrkPo1 = localStorage.getItem('wrkPo1')


  
  




  





  

  const CoOfPr1 = localStorage.getItem('costprod1')
  const CoOfPr2 = localStorage.getItem('costprod2')
  const CoOfPr3 = localStorage.getItem('costprod3')
  const CoOfPr4 = localStorage.getItem('costprod4')
  const CoOfPr5 = localStorage.getItem('costprod5')
  const CoOfPr6 = localStorage.getItem('costprod6')
  const CoOfPr7 = localStorage.getItem('costprod7')
  const CoOfPr8 = localStorage.getItem('costprod8')



   
  


 
  

  const NetSal1 = localStorage.getItem('display')
  const NetSal2 = localStorage.getItem('display1')
  const NetSal3= localStorage.getItem('display2')
  const NetSal4 = localStorage.getItem('display3')
  const NetSal5 = localStorage.getItem('display4')
  const NetSal6 = localStorage.getItem('display5')
  const NetSal7 = localStorage.getItem('display6')
  const NetSal8 = localStorage.getItem('display7')





  

  const PuRm1 = localStorage.getItem('PuRm1')
  const PuRm2 = localStorage.getItem('PuRm2')
  const PuRm3 = localStorage.getItem('PuRm3')
  const PuRm4 = localStorage.getItem('PuRm4')
  const PuRm5 = localStorage.getItem('PuRm5')
  const PuRm6 = localStorage.getItem('PuRm6')
  const PuRm7 = localStorage.getItem('PuRm7')
  const PuRm8 = localStorage.getItem('PuRm8')



  const raMat1 = localStorage.getItem('raMat1')

  const raMat12 = localStorage.getItem('raMat12')
  const raMat13 = localStorage.getItem('raMat13')
  const raMat14 = localStorage.getItem('raMat14')
  const raMat15 = localStorage.getItem('raMat15')
  const raMat16 = localStorage.getItem('raMat16')
  const raMat17 = localStorage.getItem('raMat17')
  const raMat18 = localStorage.getItem('raMat18')
  const raMat19 = localStorage.getItem('raMat19')



  
  const [CoOfSaDe1,setCoOfSaDe1] = useState('');
  const [CoOfSaDe2,setCoOfSaDe2] = useState('');
  const [CoOfSaDe3,setCoOfSaDe3] = useState('');
  const [CoOfSaDe4,setCoOfSaDe4] = useState('');
  const [CoOfSaDe5,setCoOfSaDe5] = useState('');
  const [CoOfSaDe6,setCoOfSaDe6] = useState('');
  const [CoOfSaDe7,setCoOfSaDe7] = useState('');
  const [CoOfSaDe8,setCoOfSaDe8] = useState('');


   

  const [OpCoSa1,setOpCoSa1] = useState('');
  const [OpCoSa2,setOpCoSa2] = useState('');
  const [OpCoSa3,setOpCoSa3] = useState('');
  const [OpCoSa4,setOpCoSa4] = useState('');
  const [OpCoSa5,setOpCoSa5] = useState('');
  const [OpCoSa6,setOpCoSa6] = useState('');
  const [OpCoSa7,setOpCoSa7] = useState('');
  const [OpCoSa8,setOpCoSa8] = useState('');

  useEffect(() => {
    localStorage.setItem("OpCoSa1", OpCoSa1);
  }, [OpCoSa1]);

  useEffect(() => {
    localStorage.setItem("OpCoSa2", OpCoSa2);
  }, [OpCoSa2]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa3", OpCoSa3);
  }, [OpCoSa3]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa4", OpCoSa4);
  }, [OpCoSa4]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa5", OpCoSa5);
  }, [OpCoSa5]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa6", OpCoSa6);
  }, [OpCoSa6]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa7", OpCoSa7);
  }, [OpCoSa7]);
  
  useEffect(() => {
    localStorage.setItem("OpCoSa8", OpCoSa8);
  }, [OpCoSa8]);
  
  
  
  
  
  
  
  


  
const sumOpCoSa1 = () => {
  try {
   
    const result = (eval(` 100 - (${opProLo1 || 0} / ${costsales1 || 0})  *100`)).toFixed(2);
    setOpCoSa1(result);
  } catch (error) {
    setOpCoSa1("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa1();
}, [opProLo1,costsales1]);

 
const sumOpCoSa2 = () => {
  try {
   
    const result = (eval(` 100 - (${opProLo2 || 0} / ${costsales2 || 0})  *100`)).toFixed(2);
    setOpCoSa2(result);
  } catch (error) {
    setOpCoSa2("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa2();
}, [opProLo2,costsales2]);

 
const sumOpCoSa3 = () => {
  try {
   
    const result = (eval(` 100 - (${opProLo3 || 0} / ${costsales3 || 0})  *100`)).toFixed(2);
    setOpCoSa3(result);
  } catch (error) {
    setOpCoSa3("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa3();
}, [opProLo3,costsales3]);

 
const sumOpCoSa4 = () => {
  try {
   
    const result = eval(` 100 - (${opProLo4 || 0} / ${costsales4 || 0})  *100`);
    setOpCoSa4(result);
  } catch (error) {
    setOpCoSa4("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa4();
}, [opProLo4,costsales4]);


 
const sumOpCoSa5 = () => {
  try {
   
    const result = eval(` 100 - (${opProLo5 || 0} / ${costsales5 || 0})  *100`);
    setOpCoSa5(result);
  } catch (error) {
    setOpCoSa5("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa5();
}, [opProLo5,costsales5]);

 
const sumOpCoSa6 = () => {
  try {
   
    const result = eval(` 100 - (${opProLo6 || 0} / ${costsales6 || 0})  *100`);
    setOpCoSa6(result);
  } catch (error) {
    setOpCoSa6("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa6();
}, [opProLo6,costsales6]);

 
const sumOpCoSa7 = () => {
  try {
   
    const result = eval(` 100 - (${opProLo7 || 0} / ${costsales7 || 0})  *100`);
    setOpCoSa7(result);
  } catch (error) {
    setOpCoSa7("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa7();
}, [opProLo7,costsales7]);

 
const sumOpCoSa8 = () => {
  try {
   
    const result = eval(` 100 - (${opProLo8 || 0} / ${costsales8 || 0})  *100`);
    setOpCoSa8(result);
  } catch (error) {
    setOpCoSa8("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSa8();
}, [opProLo8,costsales8]);










  




  

  const [RmPrSa1,setRmPrSa1] = useState('');
  const [RmPrSa2,setRmPrSa2] = useState('');
  const [RmPrSa3,setRmPrSa3] = useState('');
  const [RmPrSa4,setRmPrSa4] = useState('');
  const [RmPrSa5,setRmPrSa5] = useState('');
  const [RmPrSa6,setRmPrSa6] = useState('');
  const [RmPrSa7,setRmPrSa7] = useState('');
  const [RmPrSa8,setRmPrSa8] = useState('');



 



  
const sumCoOfSaDe1 = () => {
  try {
   
    const result = (((CoOfSa1 || 0) - (Depre1 || 0)) / (NetSal1 || 1) * 100) .toFixed(2);
    setCoOfSaDe1(result);
  } catch (error) {
    setCoOfSaDe1("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe1();
}, [CoOfSa1,Depre1,NetSal1]);

const sumCoOfSaDe2 = () => {
  try {
   
    const result = (eval(`(${CoOfSa2 || 0} - ${Depre2 || 0}) / ${NetSal2 || 0} *100) `)).toFixed(2);
    setCoOfSaDe2(result);
  } catch (error) {
    setCoOfSaDe2("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe2();
}, [CoOfSa2,Depre2,NetSal2]);

const sumCoOfSaDe3 = () => {
  try {
   
    const result = (eval(`(${CoOfSa3 || 0} - ${Depre3 || 0}) / ${NetSal3 || 0} *100`)).toFixed(2);
    setCoOfSaDe3(result);
  } catch (error) {
    setCoOfSaDe3("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe3();
}, [CoOfSa3,Depre3,NetSal3]);

const sumCoOfSaDe4 = () => {
  try {
   
    const result = (eval(`(${CoOfSa4 || 0} - ${Depre4 || 0}) / ${NetSal4 || 0} *100`)).toFixed(2);
    setCoOfSaDe4(result);
  } catch (error) {
    setCoOfSaDe4("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe4();
}, [CoOfSa4,Depre4,NetSal4]);

const sumCoOfSaDe5 = () => {
  try {
   
    const result = (eval(`(${CoOfSa5 || 0} - ${Depre5 || 0}) / ${NetSal5 || 0} *100`)).toFixed(2);
    setCoOfSaDe5(result);
  } catch (error) {
    setCoOfSaDe5("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe5();
}, [CoOfSa5,Depre5,NetSal5]);

const sumCoOfSaDe6 = () => {
  try {
   
    const result = (eval(`(${CoOfSa6 || 0} - ${Depre6 || 0}) / ${NetSal6 || 0} *100`)).toFixed(2);
    setCoOfSaDe6(result);
  } catch (error) {
    setCoOfSaDe6("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe6();
}, [CoOfSa6,Depre6,NetSal6]);

const sumCoOfSaDe7 = () => {
  try {
   
    const result = (eval(`(${CoOfSa7 || 0} - ${Depre7 || 0}) / ${NetSal7 || 0} *100`)).toFixed(2);
    setCoOfSaDe7(result);
  } catch (error) {
    setCoOfSaDe7("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe7();
}, [CoOfSa7,Depre7,NetSal7]);

const sumCoOfSaDe8 = () => {
  try {
   
    const result = (eval(`(${CoOfSa8 || 0} - ${Depre8 || 0}) / ${NetSal8 || 0} *100`)).toFixed(2);
    setCoOfSaDe8(result);
  } catch (error) {
    setCoOfSaDe8("Input all ");  
  }
};

useEffect(() => {
  sumCoOfSaDe8();
}, [CoOfSa8,Depre8,NetSal8]);







  


  

  


  const [CoRaMa1,setCoRaMa1] = useState('');
  const [CoRaMa2,setCoRaMa2] = useState('');
  const [CoRaMa3,setCoRaMa3] = useState('');
  const [CoRaMa4,setCoRaMa4] = useState('');
  const [CoRaMa5,setCoRaMa5] = useState('');
  const [CoRaMa6,setCoRaMa6] = useState('');
  const [CoRaMa7,setCoRaMa7] = useState('');
  const [CoRaMa8,setCoRaMa8] = useState('');
  


  

  const [PoAtSaVa1,setPoAtSaVa1] = useState('');
  const [PoAtSaVa2,setPoAtSaVa2] = useState('');
  const [PoAtSaVa3,setPoAtSaVa3] = useState('');
  const [PoAtSaVa4,setPoAtSaVa4] = useState('');
  const [PoAtSaVa5,setPoAtSaVa5] = useState('');
  const [PoAtSaVa6,setPoAtSaVa6] = useState('');
  const [PoAtSaVa7,setPoAtSaVa7] = useState('');
  const [PoAtSaVa8,setPoAtSaVa8] = useState('');

  
  const [CoPrDeSa1,setCoPrDeSa1] = useState('');
  const [CoPrDeSa2,setCoPrDeSa2] = useState('');
  const [CoPrDeSa3,setCoPrDeSa3] = useState('');
  const [CoPrDeSa4,setCoPrDeSa4] = useState('');
  const [CoPrDeSa5,setCoPrDeSa5] = useState('');
  const [CoPrDeSa6,setCoPrDeSa6] = useState('');
  const [CoPrDeSa7,setCoPrDeSa7] = useState('');
  const [CoPrDeSa8,setCoPrDeSa8] = useState('');

  
  





  const sumCoPrDeSa1 = () => {
    try {
     
      const result = (eval(
        `((${CoOfPr1 || 0} / ${Depre1 || 0}) + (${PoAtSaVa1 || 0} - ${FiGood12 || 0} - ${finGo1 || 0})) *100`)).toFixed(2);
      setCoPrDeSa1(result);
    } catch (error) {
      setCoPrDeSa1("Input all ");  
    }
  };

  useEffect(() => {
    sumCoPrDeSa1();
  }, [CoOfPr1,Depre1,PoAtSaVa1,FiGood12,finGo1]);

  
const sumCoPrDeSa2 = () => {
  try {
   
    const result = (eval(
      `((${CoOfPr2 || 0} / ${Depre2 || 0}) + (${PoAtSaVa2 || 0} - ${FiGood13 || 0} - ${FiGood12 || 0})) *100`)).toFixed(2);
    setCoPrDeSa2(result);
  } catch (error) {
    setCoPrDeSa2("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa2();
}, [CoOfPr2,Depre2,PoAtSaVa2,FiGood13,FiGood12]);

  
const sumCoPrDeSa3 = () => {
  try {
   
    const result = (eval(
      `((${CoOfPr3 || 0} / ${Depre3 || 0}) + (${PoAtSaVa3 || 0} - ${FiGood14 || 0} - ${FiGood13 || 0})) *100`)).toFixed(2);
    setCoPrDeSa3(result);
  } catch (error) {
    setCoPrDeSa3("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa3();
}, [CoOfPr3,Depre3,PoAtSaVa3,FiGood14,FiGood13]);


  
const sumCoPrDeSa4 = () => {
  try {
   
    const result = (eval(
      `((${CoOfPr4 || 0} / ${Depre4 || 0}) + (${PoAtSaVa4 || 0} - ${FiGood15 || 0} - ${FiGood14 || 0})) *100`)).toFixed(2);
    setCoPrDeSa4(result);
  } catch (error) {
    setCoPrDeSa4("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa4();
}, [CoOfPr4,Depre4,PoAtSaVa4,FiGood15,FiGood14]);


  
const sumCoPrDeSa5 = () => {
  try {
   
    const result = eval(
      `((${CoOfPr5 || 0} / ${Depre5 || 0}) + (${PoAtSaVa5 || 0} - ${FiGood16 || 0} - ${FiGood15 || 0})) *100`);
    setCoPrDeSa5(result);
  } catch (error) {
    setCoPrDeSa5("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa5();
}, [CoOfPr5,Depre5,PoAtSaVa5,FiGood16,FiGood15]);


  
const sumCoPrDeSa6 = () => {
  try {
   
    const result = eval(
      `((${CoOfPr6 || 0} / ${Depre6 || 0}) + (${PoAtSaVa6 || 0} - ${FiGood17 || 0} - ${FiGood16 || 0})) *100`);
    setCoPrDeSa6(result);
  } catch (error) {
    setCoPrDeSa6("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa6();
}, [CoOfPr6,Depre6,PoAtSaVa6,FiGood17,FiGood16]);


  
const sumCoPrDeSa7 = () => {
  try {
   
    const result = eval(
      `((${CoOfPr7 || 0} / ${Depre7 || 0}) + (${PoAtSaVa7 || 0} - ${FiGood18 || 0} - ${FiGood17 || 0})) *100`);
    setCoPrDeSa7(result);
  } catch (error) {
    setCoPrDeSa7("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa7();
}, [CoOfPr7,Depre7,PoAtSaVa7,FiGood18,FiGood17]);


  
const sumCoPrDeSa8 = () => {
  try {
   
    const result = eval(
      `((${CoOfPr8 || 0} / ${Depre8 || 0}) + (${PoAtSaVa8 || 0} - ${FiGood19 || 0} - ${FiGood18 || 0})) * 100`);
    setCoPrDeSa8(result);
  } catch (error) {
    setCoPrDeSa8("Input all ");  
  }
};

useEffect(() => {
  sumCoPrDeSa8();
}, [CoOfPr8,Depre8,PoAtSaVa8,FiGood19,FiGood18]);


// -------------------------------

  
  const sumPoAtSaVa1 = () => {
    try {
     
      const result = eval(
        `${NetSal1 || 0} + ${FiGood12 || 0} + ${wrkPo12 || 0} - ${finGo1 || 0} - ${wrkPo1 || 0}`
      );
      setPoAtSaVa1(result);
    } catch (error) {
      setPoAtSaVa1("Input all ");
    }
  };

  useEffect(() => {
    sumPoAtSaVa1();
  }, [NetSal1,FiGood12,wrkPo12,finGo1.wrkPo1]);

  
const sumPoAtSaVa2 = () => {
  try {
   
    const result = eval(
      `${NetSal2 || 0} + ${FiGood13 || 0} + ${wrkPo13 || 0} - ${FiGood12 || 0} - ${wrkPo12 || 0}`
    );
    setPoAtSaVa2(result);
  } catch (error) {
    setPoAtSaVa2("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa2();
}, [NetSal2,FiGood13,wrkPo13,FiGood12.wrkPo12]);



  
const sumPoAtSaVa3 = () => {
  try {
   
    const result = eval(
      `${NetSal3 || 0} + ${FiGood14 || 0} + ${wrkPo14 || 0} - ${FiGood13 || 0} - ${wrkPo13 || 0}`
    );
    setPoAtSaVa3(result);
  } catch (error) {
    setPoAtSaVa3("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa3();
}, [NetSal3,FiGood14,wrkPo14,FiGood13.wrkPo13]);

  
const sumPoAtSaVa4 = () => {
  try {
   
    const result = eval(
      `${NetSal4 || 0} + ${FiGood15 || 0} + ${wrkPo15 || 0} - ${FiGood14 || 0} - ${wrkPo14 || 0}`
    );
    setPoAtSaVa4(result);
  } catch (error) {
    setPoAtSaVa4("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa4();
}, [NetSal4,FiGood15,wrkPo15,FiGood14.wrkPo14]);



  
const sumPoAtSaVa5 = () => {
  try {
   
    const result = eval(
      `${NetSal5 || 0} + ${FiGood16 || 0} + ${wrkPo16 || 0} - ${FiGood15 || 0} - ${wrkPo15 || 0}`
    );
    setPoAtSaVa5(result);
  } catch (error) {
    setPoAtSaVa5("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa5();
}, [NetSal5,FiGood16,wrkPo16,FiGood15.wrkPo15]);

  
const sumPoAtSaVa6 = () => {
  try {
   
    const result = eval(
      `${NetSal6 || 0} + ${FiGood17 || 0} + ${wrkPo17 || 0} - ${FiGood16 || 0} - ${wrkPo16 || 0}`
    );
    setPoAtSaVa6(result);
  } catch (error) {
    setPoAtSaVa6("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa6();
}, [NetSal6,FiGood17,wrkPo17,FiGood16.wrkPo16]);

  
const sumPoAtSaVa7 = () => {
  try {
   
    const result = eval(
      `${NetSal7 || 0} + ${FiGood18 || 0} + ${wrkPo18 || 0} - ${FiGood17 || 0} - ${wrkPo17 || 0}`
    );
    setPoAtSaVa7(result);
  } catch (error) {
    setPoAtSaVa7("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa7();
}, [NetSal7,FiGood18,wrkPo18,FiGood17.wrkPo17]);

  
const sumPoAtSaVa8 = () => {
  try {
   
    const result = eval(
      `${NetSal8 || 0} + ${FiGood19 || 0} + ${wrkPo19 || 0} - ${FiGood18 || 0} - ${wrkPo18 || 0}`
    );
    setPoAtSaVa8(result);
  } catch (error) {
    setPoAtSaVa8("Input all ");
  }
};

useEffect(() => {
  sumPoAtSaVa8();
}, [NetSal8,FiGood19,wrkPo19,FiGood18.wrkPo18]);









  
  const sumCoRaMa1 = () => {
    try {
     
      const result = eval(
        `${raMat1 || 0} + ${PuRm1 || 0} - ${raMat12 || 0}`
      );
      setCoRaMa1(result);
    } catch (error) {
      setCoRaMa1("Input all ");
    }
  };

  useEffect(() => {
    sumCoRaMa1();
  }, [raMat1, PuRm1, raMat12]);


  const sumCoRaMa2 = () => {
    try {
     
      const result = eval(
        `${raMat12 || 0} + ${PuRm2 || 0} - ${raMat13 || 0}`
      );
      setCoRaMa2(result);
    } catch (error) {
      setCoRaMa2("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa2();
  }, [raMat12, PuRm2, raMat13]);

  const sumCoRaMa3 = () => {
    try {
     
      const result = eval(
        `${raMat13 || 0} + ${PuRm3 || 0} - ${raMat14 || 0}`
      );
      setCoRaMa3(result);
    } catch (error) {
      setCoRaMa3("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa3();
  }, [raMat13, PuRm3, raMat14]);


  const sumCoRaMa4 = () => {
    try {
     
      const result = eval(
        `${raMat14 || 0} + ${PuRm4 || 0} - ${raMat15 || 0}`
      );
      setCoRaMa4(result);
    } catch (error) {
      setCoRaMa4("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa4();
  }, [raMat14, PuRm4, raMat15]);

  const sumCoRaMa5 = () => {
    try {
     
      const result = eval(
        `${raMat15 || 0} + ${PuRm5 || 0} - ${raMat16 || 0}`
      );
      setCoRaMa5(result);
    } catch (error) {
      setCoRaMa5("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa5();
  }, [raMat15, PuRm5, raMat16]);

  const sumCoRaMa6 = () => {
    try {
     
      const result = eval(
        `${raMat16 || 0} + ${PuRm6 || 0} - ${raMat17 || 0}`
      );
      setCoRaMa6(result);
    } catch (error) {
      setCoRaMa6("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa6();
  }, [raMat16, PuRm6, raMat17]);

  const sumCoRaMa7 = () => {
    try {
     
      const result = eval(
        `${raMat17 || 0} + ${PuRm7 || 0} - ${raMat18 || 0}`
      );
      setCoRaMa7(result);
    } catch (error) {
      setCoRaMa7("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa7();
  }, [raMat17, PuRm7, raMat18]);  

  const sumCoRaMa8 = () => {
    try {
     
      const result = eval(
        `${raMat18 || 0} + ${PuRm8 || 0} - ${raMat19 || 0}`
      );
      setCoRaMa8(result);
    } catch (error) {
      setCoRaMa8("Input all ");
    }
  };
  
  useEffect(() => {
    sumCoRaMa8();
  }, [raMat18, PuRm8, raMat19]);

   
  const sumRmPrSa1 = () => {
    try {
     
      const result = (eval(`(${CoRaMa1 || 0} / ${PoAtSaVa1 || 0})  *100`)).toFixed(2);
      setRmPrSa1(result);
    } catch (error) {
      setRmPrSa1("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa1();
  }, [CoRaMa1,PoAtSaVa1]);
  
  const sumRmPrSa2 = () => {
    try {
     
      const result = (eval(`(${CoRaMa2 || 0} / ${PoAtSaVa2 || 0}) *100`)).toFixed(2);
      setRmPrSa2(result);
    } catch (error) {
      setRmPrSa2("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa2();
  }, [CoRaMa2,PoAtSaVa2]);
  
  const sumRmPrSa3 = () => {
    try {
     
      const result = (eval(`(${CoRaMa3 || 0} / ${PoAtSaVa3 || 0})  *100`)).toFixed(2);
      setRmPrSa3(result);
    } catch (error) {
      setRmPrSa3("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa3();
  }, [CoRaMa3,PoAtSaVa3]);
  
  const sumRmPrSa4 = () => {
    try {
     
      const result = (eval(`(${CoRaMa4 || 0} / ${PoAtSaVa4 || 0})  *100`)).toFixed(2);
      setRmPrSa4(result);
    } catch (error) {
      setRmPrSa4("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa4();
  }, [CoRaMa4,PoAtSaVa4]);
  
  
  const sumRmPrSa5 = () => {
    try {
     
      const result = (eval(`(${CoRaMa5 || 0} / ${PoAtSaVa5 || 0})  *100`)).toFixed(2);
      setRmPrSa5(result);
    } catch (error) {
      setRmPrSa5("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa5();
  }, [CoRaMa5,PoAtSaVa5]);
  
  const sumRmPrSa6 = () => {
    try {
     
      const result = (eval(`(${CoRaMa6 || 0} / ${PoAtSaVa6 || 0})  *100`)).toFixed(2);
      setRmPrSa6(result);
    } catch (error) {
      setRmPrSa6("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa6();
  }, [CoRaMa6,PoAtSaVa6]);
  
  const sumRmPrSa7 = () => {
    try {
     
      const result = (eval(`(${CoRaMa7 || 0} / ${PoAtSaVa7 || 0})  *100`)).toFixed(2);
      setRmPrSa7(result);
    } catch (error) {
      setRmPrSa7("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa7();
  }, [CoRaMa7,PoAtSaVa7]);
  
  const sumRmPrSa8 = () => {
    try {
     
      const result = (eval(`(${CoRaMa8 || 0} / ${PoAtSaVa8 || 0}) *100`)).toFixed(2);
      setRmPrSa8(result);
    } catch (error) {
      setRmPrSa8("Input all ");  
    }
  };
  
  useEffect(() => {
    sumRmPrSa8();
  }, [CoRaMa8,PoAtSaVa8]);




  
const sumNetPrSa1 = () => {
  try {
   
    const result = (((NePrafTa1 || 0) / (NetSal1 || 0))   * 100).toFixed(2);
    setNetPrSa1(result);
  } catch (error) {
    setNetPrSa1("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa1();
}, [NePrafTa1,NetSal1]);

const sumNetPrSa2 = () => {
  try {
   
    const result = (((NePrafTa2 || 0) / (NetSal2 || 0))   * 100).toFixed(2);
    setNetPrSa2(result);
  } catch (error) {
    setNetPrSa2("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa2();
}, [NePrafTa2,NetSal2]);

const sumNetPrSa3 = () => {
  try {
   
    const result = (((NePrafTa3 || 0) / (NetSal3 || 0))   * 100).toFixed(2);
    setNetPrSa3(result);
  } catch (error) {
    setNetPrSa3("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa3();
}, [NePrafTa3,NetSal3]);

const sumNetPrSa4 = () => {
  try {
   
    const result = (((NePrafTa4 || 0) / (NetSal4 || 0))   * 100).toFixed(2);
    setNetPrSa4(result);
  } catch (error) {
    setNetPrSa4("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa4();
}, [NePrafTa4,NetSal4]);

const sumNetPrSa5 = () => {
  try {
   
    const result = (((NePrafTa5 || 0) / (NetSal5 || 0))   * 100).toFixed(2);
    setNetPrSa5(result);
  } catch (error) {
    setNetPrSa5("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa5();
}, [NePrafTa5,NetSal5]);

const sumNetPrSa6 = () => {
  try {
   
    const result = (((NePrafTa6 || 0) / (NetSal6 || 0))   * 100).toFixed(2);
    setNetPrSa6(result);
  } catch (error) {
    setNetPrSa6("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa6();
}, [NePrafTa6,NetSal6]);

const sumNetPrSa7 = () => {
  try {
   
    const result = (((NePrafTa7 || 0) / (NetSal7 || 0))   * 100).toFixed(2);
    setNetPrSa7(result);
  } catch (error) {
    setNetPrSa7("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa7();
}, [NePrafTa7,NetSal7]);

const sumNetPrSa8 = () => {
  try {
   
    const result = (((NePrafTa8 || 0) / (NetSal8 || 0))   * 100).toFixed(2);
    setNetPrSa8(result);
  } catch (error) {
    setNetPrSa8("Input all ");  
  }
};

useEffect(() => {
  sumNetPrSa8();
}, [NePrafTa8,NetSal8]);



const sumMfgExCo1 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx1 || 0} / ${CoOfSa1 || 0})  *100`)).toFixed(2);
    setMfgExCo1(result);
  } catch (error) {
    setMfgExCo1("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo1();
}, [mfDiEx1,CoOfSa1]);

const sumMfgExCo2 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx2 || 0} / ${CoOfSa2 || 0})  *100`)).toFixed(2);
    setMfgExCo2(result);
  } catch (error) {
    setMfgExCo2("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo2();
}, [mfDiEx2,CoOfSa2]);

const sumMfgExCo3 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx3 || 0} / ${CoOfSa3 || 0})  *100`)).toFixed(2);
    setMfgExCo3(result);
  } catch (error) {
    setMfgExCo3("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo3();
}, [mfDiEx3,CoOfSa3]);

const sumMfgExCo4 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx4 || 0} / ${CoOfSa4 || 0})  *100`)).toFixed(2);
    setMfgExCo4(result);
  } catch (error) {
    setMfgExCo4("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo4();
}, [mfDiEx4,CoOfSa4]);

const sumMfgExCo5 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx5 || 0} / ${CoOfSa5 || 0})  *100`)).toFixed(2);
    setMfgExCo5(result);
  } catch (error) {
    setMfgExCo5("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo5();
}, [mfDiEx5,CoOfSa5]);

const sumMfgExCo6 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx6 || 0} / ${CoOfSa6 || 0})  *100`)).toFixed(2);
    setMfgExCo6(result);
  } catch (error) {
    setMfgExCo6("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo6();
}, [mfDiEx6,CoOfSa6]);

const sumMfgExCo7 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx7 || 0} / ${CoOfSa7 || 0})  *100`)).toFixed(2);
    setMfgExCo7(result);
  } catch (error) {
    setMfgExCo7("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo7();
}, [mfDiEx7,CoOfSa7]);

const sumMfgExCo8 = () => {
  try {
   
    const result = (eval(`  (${mfDiEx8 || 0} / ${CoOfSa8 || 0})  *100`).toFixed(2));
    setMfgExCo8(result);
  } catch (error) {
    setMfgExCo8("Input all ");  
  }
};

useEffect(() => {
  sumMfgExCo8();
}, [mfDiEx8,CoOfSa8]);




 
const sumSeAdExCo1 = () => {
  try {
   
    const result = (eval(` (${selAdm1 || 0} / ${costsales1 || 0})  *100`)).toFixed(2);
    setSeAdExCo1(result);
  } catch (error) {
    setSeAdExCo1("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo1();
}, [selAdm1,costsales1]);

 
const sumSeAdExCo2 = () => {
  try {
   
    const result = (eval(`  (${selAdm2 || 0} / ${costsales2 || 0})  *100`)).toFixed(2);
    setSeAdExCo2(result);
  } catch (error) {
    setSeAdExCo2("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo2();
}, [selAdm2,costsales2]);

 
const sumSeAdExCo3 = () => {
  try {
   
    const result = (eval(`  (${selAdm3 || 0} / ${costsales3 || 0})  *100`)).toFixed(2);
    setSeAdExCo3(result);
  } catch (error) {
    setSeAdExCo3("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo3();
}, [selAdm3,costsales3]);







const sumSeAdExCo4 = () => {
  try {
   
    const result = (eval(`  (${selAdm4 || 0} / ${costsales4 || 0})  *100`)).toFixed(2);
    setSeAdExCo4(result);
  } catch (error) {
    setSeAdExCo4("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo4();
}, [selAdm4,costsales4]);

 
const sumSeAdExCo5 = () => {
  try {
   
    const result = (eval(`  (${selAdm5 || 0} / ${costsales5 || 0})  *100`)).toFixed(2);
    setSeAdExCo5(result);
  } catch (error) {
    setSeAdExCo5("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo5();
}, [selAdm5,costsales5]);

 
const sumSeAdExCo6 = () => {
  try {
   
    const result = (eval(`  (${selAdm6 || 0} / ${costsales6 || 0})  *100`)).toFixed(2);
    setSeAdExCo6(result);
  } catch (error) {
    setSeAdExCo6("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo6();
}, [selAdm6,costsales6]);


 
const sumSeAdExCo7 = () => {
  try {
   
    const result = (eval(`  (${selAdm7 || 0} / ${costsales7 || 0})  *100`)).toFixed(2);
    setSeAdExCo7(result);
  } catch (error) {
    setSeAdExCo7("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo7();
}, [selAdm7,costsales7]);


 
const sumSeAdExCo8 = () => {
  try {
   
    const result = (eval(`  (${selAdm8 || 0} / ${costsales8 || 0})  *100`)).toFixed(2);
    setSeAdExCo8(result);
  } catch (error) {
    setSeAdExCo8("Input all ");  
  }
};

useEffect(() => {
  sumSeAdExCo8();
}, [selAdm8,costsales8]);







const sumFiChCoSa1 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales1 || 0})  *100`)).toFixed(2);
    setFiChCoSa1(result);
  } catch (error) {
    setFiChCoSa1("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa1();
}, [IntFinch,costsales1]);


const sumFiChCoSa2 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales2 || 0})  *100`)).toFixed(2);
    setFiChCoSa2(result);
  } catch (error) {
    setFiChCoSa2("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa2();
}, [IntFinch,costsales2]);


const sumFiChCoSa3 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales3 || 0})  *100`)).toFixed(2);
    setFiChCoSa3(result);
  } catch (error) {
    setFiChCoSa3("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa3();
}, [IntFinch,costsales3]);


const sumFiChCoSa4 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales4 || 0})  *100`)).toFixed(2);
    setFiChCoSa4(result);
  } catch (error) {
    setFiChCoSa4("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa4();
}, [IntFinch,costsales4]);


const sumFiChCoSa5 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales5 || 0})  *100`)).toFixed(2);
    setFiChCoSa5(result);
  } catch (error) {
    setFiChCoSa5("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa5();
}, [IntFinch,costsales5]);


const sumFiChCoSa6 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales6 || 0})  *100`)).toFixed(2);
    setFiChCoSa6(result);
  } catch (error) {
    setFiChCoSa6("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa6();
}, [IntFinch,costsales6]);


const sumFiChCoSa7 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales7 || 0})  *100`)).toFixed(2);
    setFiChCoSa7(result);
  } catch (error) {
    setFiChCoSa7("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa7();
}, [IntFinch,costsales7]);


const sumFiChCoSa8 = () => {
  try {
   
    const result = (eval(`  (${IntFinch || 0} / ${costsales8 || 0})  *100`)).toFixed(2);
    setFiChCoSa8(result);
  } catch (error) {
    setFiChCoSa8("Input all ");  
  }
};

useEffect(() => {
  sumFiChCoSa8();
}, [IntFinch,costsales8]);



const sumTaNeWo1 = () => {
  try {
   
    const result = (eval(`  (${NetWo1 || 0} - ${ToIa1 || 0})  `)).toFixed(2);
    setTaNeWo1(result);
  } catch (error) {
    setTaNeWo1("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo1();
}, [NetWo1,ToIa1]);

const sumTaNeWo2 = () => {
  try {
   
    const result = eval(`  (${NetWo2 || 0} - ${ToIa2 || 0})  `);
    setTaNeWo2(result);
  } catch (error) {
    setTaNeWo2("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo2();
}, [NetWo2,ToIa2]);

const sumTaNeWo3 = () => {
  try {
   
    const result = eval(`  (${NetWo3 || 0} - ${ToIa3 || 0})  `);
    setTaNeWo3(result);
  } catch (error) {
    setTaNeWo3("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo3();
}, [NetWo3,ToIa3]);

const sumTaNeWo4 = () => {
  try {
   
    const result = eval(`  (${NetWo4 || 0} - ${ToIa4 || 0})  `);
    setTaNeWo4(result);
  } catch (error) {
    setTaNeWo4("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo4();
}, [NetWo4,ToIa4]);

const sumTaNeWo5 = () => {
  try {
   
    const result = eval(`  (${NetWo5 || 0} - ${ToIa5 || 0})  `);
    setTaNeWo5(result);
  } catch (error) {
    setTaNeWo5("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo5();
}, [NetWo5,ToIa5]);

const sumTaNeWo6 = () => {
  try {
   
    const result = eval(`  (${NetWo6 || 0} - ${ToIa6 || 0})  `);
    setTaNeWo6(result);
  } catch (error) {
    setTaNeWo6("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo6();
}, [NetWo6,ToIa6]);

const sumTaNeWo7 = () => {
  try {
   
    const result = eval(`  (${NetWo7 || 0} - ${ToIa7 || 0})  `);
    setTaNeWo7(result);
  } catch (error) {
    setTaNeWo7("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo7();
}, [NetWo7,ToIa7]);

const sumTaNeWo8 = () => {
  try {
   
    const result = eval(`  (${NetWo8 || 0} - ${ToIa8 || 0})  `);
    setTaNeWo8(result);
  } catch (error) {
    setTaNeWo8("Input all ");  
  }
};

useEffect(() => {
  sumTaNeWo8();
}, [NetWo8,ToIa8]);


 
const sumIncDec2 = () => {
  try {
   
    const result = eval(`  (${TaNeWo1 || 0} - ${TaNeWo2 || 0})  `);
    setIncDec2(result);
  } catch (error) {
    setIncDec2("Input all ");  
  }
};

useEffect(() => {
  sumIncDec2();
}, [TaNeWo1,TaNeWo1]);



const sumIncDec3 = () => {
  try {
   
    const result = eval(`  (${TaNeWo2 || 0} - ${TaNeWo3 || 0})  `);
    setIncDec3(result);
  } catch (error) {
    setIncDec3("Input all ");  
  }
};

useEffect(() => {
  sumIncDec3();
}, [TaNeWo2,TaNeWo2]);  


const sumIncDec4 = () => {
  try {
   
    const result = eval(`  (${TaNeWo3 || 0} - ${TaNeWo4 || 0})  `);
    setIncDec4(result);
  } catch (error) {
    setIncDec4("Input all ");  
  }
};

useEffect(() => {
  sumIncDec4();
}, [TaNeWo3,TaNeWo3]);


const sumIncDec5 = () => {
  try {
   
    const result = eval(`  (${TaNeWo4 || 0} - ${TaNeWo5 || 0})  `);
    setIncDec5(result);
  } catch (error) {
    setIncDec5("Input all ");  
  }
};

useEffect(() => {
  sumIncDec5();
}, [TaNeWo4,TaNeWo4]);


const sumIncDec6 = () => {
  try {
   
    const result = eval(`  (${TaNeWo5 || 0} - ${TaNeWo6 || 0})  `);
    setIncDec6(result);
  } catch (error) {
    setIncDec6("Input all ");  
  }
};

useEffect(() => {
  sumIncDec6();
}, [TaNeWo5,TaNeWo5]);


const sumIncDec7 = () => {
  try {
   
    const result = eval(`  (${TaNeWo6 || 0} - ${TaNeWo7 || 0})  `);
    setIncDec7(result);
  } catch (error) {
    setIncDec7("Input all ");  
  }
};

useEffect(() => {
  sumIncDec7();
}, [TaNeWo6,TaNeWo6]);


const sumIncDec8 = () => {
  try {
   
    const result = eval(`  (${TaNeWo7 || 0} - ${TaNeWo8 || 0})  `);
    setIncDec8(result);
  } catch (error) {
    setIncDec8("Input all ");  
  }
};

useEffect(() => {
  sumIncDec8();
}, [TaNeWo7,TaNeWo7]);




const sumTwQuEq1 = () => {
  try {
   
    const result = eval(`  (${TaNeWo1 || 0} - ${InLoTo1 || 0})  `);
    setTwQuEq1(result);
  } catch (error) {
    setTwQuEq1("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq1();
}, [TaNeWo1,InLoTo1]);

const sumTwQuEq2 = () => {
  try {
   
    const result = eval(`  (${TaNeWo2 || 0} - ${InLoTo2 || 0})  `);
    setTwQuEq2(result);
  } catch (error) {
    setTwQuEq2("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq2();
}, [TaNeWo2,InLoTo2]);

const sumTwQuEq3 = () => {
  try {
   
    const result = eval(`  (${TaNeWo3 || 0} - ${InLoTo3 || 0})  `);
    setTwQuEq3(result);
  } catch (error) {
    setTwQuEq3("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq3();
}, [TaNeWo3,InLoTo3]);

const sumTwQuEq4 = () => {
  try {
   
    const result = eval(`  (${TaNeWo4 || 0} - ${InLoTo4 || 0})  `);
    setTwQuEq4(result);
  } catch (error) {
    setTwQuEq4("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq4();
}, [TaNeWo4,InLoTo4]);

const sumTwQuEq5 = () => {
  try {
   
    const result = eval(`  (${TaNeWo5 || 0} - ${InLoTo5 || 0})  `);
    setTwQuEq5(result);
  } catch (error) {
    setTwQuEq5("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq5();
}, [TaNeWo5,InLoTo5]);

const sumTwQuEq6 = () => {
  try {
   
    const result = eval(`  (${TaNeWo6 || 0} - ${InLoTo6 || 0})  `);
    setTwQuEq6(result);
  } catch (error) {
    setTwQuEq6("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq6();
}, [TaNeWo6,InLoTo6]);

const sumTwQuEq7 = () => {
  try {
   
    const result = eval(`  (${TaNeWo7 || 0} - ${InLoTo7 || 0})  `);
    setTwQuEq7(result);
  } catch (error) {
    setTwQuEq7("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq7();
}, [TaNeWo7,InLoTo7]);

const sumTwQuEq8 = () => {
  try {
   
    const result = eval(`  (${TaNeWo8 || 0} - ${InLoTo8 || 0})  `);
    setTwQuEq8(result);
  } catch (error) {
    setTwQuEq8("Input all ");  
  }
};

useEffect(() => {
  sumTwQuEq8();
}, [TaNeWo8,InLoTo8]);


const sumTnwQuEq1 = () => {
  try {
   
    const result = eval(`  (${UnLoPr1 || 0} + ${TaNeWo1 || 0})  `);
    setTnwQuEq1(result);
  } catch (error) {
    setTnwQuEq1("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq1();
}, [selAdm8,TaNeWo1]);

const sumTnwQuEq2 = () => {
  try {
   
    const result = eval(`  (${UnLoPr2 || 0} + ${TaNeWo2 || 0})  `);
    setTnwQuEq2(result);
  } catch (error) {
    setTnwQuEq2("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq2();
}, [UnLoPr2,TaNeWo2]);


const sumTnwQuEq3 = () => {
  try {
   
    const result = eval(`  (${UnLoPr3 || 0} + ${TaNeWo3 || 0})  `);
    setTnwQuEq3(result);
  } catch (error) {
    setTnwQuEq3("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq3();
}, [UnLoPr3,TaNeWo3]);

const sumTnwQuEq4 = () => {
  try {
   
    const result = eval(`  (${UnLoPr4 || 0} + ${TaNeWo4 || 0})  `);
    setTnwQuEq4(result);
  } catch (error) {
    setTnwQuEq4("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq4();
}, [UnLoPr4,TaNeWo4]);

const sumTnwQuEq5 = () => {
  try {
   
    const result = eval(`  (${UnLoPr5 || 0} + ${TaNeWo5 || 0})  `);
    setTnwQuEq5(result);
  } catch (error) {
    setTnwQuEq5("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq5();
}, [UnLoPr5,TaNeWo5]);

const sumTnwQuEq6 = () => {
  try {
   
    const result = eval(`  (${UnLoPr6 || 0} + ${TaNeWo6 || 0})  `);
    setTnwQuEq6(result);
  } catch (error) {
    setTnwQuEq6("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq6();
}, [UnLoPr6,TaNeWo6]);

const sumTnwQuEq7 = () => {
  try {
   
    const result = eval(`  (${UnLoPr7 || 0} + ${TaNeWo7 || 0})  `);
    setTnwQuEq7(result);
  } catch (error) {
    setTnwQuEq7("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq7();
}, [UnLoPr7,TaNeWo7]);

const sumTnwQuEq8 = () => {
  try {
   
    const result = eval(`  (${UnLoPr8 || 0} + ${TaNeWo8 || 0})  `);
    setTnwQuEq8(result);
  } catch (error) {
    setTnwQuEq8("Input all ");  
  }
};

useEffect(() => {
  sumTnwQuEq8();
}, [UnLoPr8,TaNeWo8]);



const sumNewoCa1 = () => {
  try {
   
    const result = eval(`  (${ToCuAs1 || 0} - ${ToCuLi1 || 0}) `);
    setNewoCa1(result);
  } catch (error) {
    setNewoCa1("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa1();
}, [ToCuAs1,ToCuLi1]);


const sumNewoCa2 = () => {
  try {
   
    const result = eval(`  (${ToCuAs2 || 0} - ${ToCuLi2 || 0}) `);
    setNewoCa2(result);
  } catch (error) {
    setNewoCa2("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa2();
}, [ToCuAs2,ToCuLi2]);


const sumNewoCa3 = () => {
  try {
   
    const result = eval(`  (${ToCuAs3 || 0} - ${ToCuLi3 || 0}) `);
    setNewoCa3(result);
  } catch (error) {
    setNewoCa3("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa3();
}, [ToCuAs3,ToCuLi3]);


const sumNewoCa4 = () => {
  try {
   
    const result = eval(`  (${ToCuAs4 || 0} - ${ToCuLi4 || 0}) `);
    setNewoCa4(result);
  } catch (error) {
    setNewoCa4("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa4();
}, [ToCuAs4,ToCuLi4]);


const sumNewoCa5 = () => {
  try {
   
    const result = eval(`  (${ToCuAs5 || 0} - ${ToCuLi5 || 0}) `);
    setNewoCa5(result);
  } catch (error) {
    setNewoCa5("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa5();
}, [ToCuAs5,ToCuLi5]);


const sumNewoCa6 = () => {
  try {
   
    const result = eval(`  (${ToCuAs6 || 0} - ${ToCuLi6 || 0}) `);
    setNewoCa6(result);
  } catch (error) {
    setNewoCa6("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa6();
}, [ToCuAs6,ToCuLi6]);


const sumNewoCa7 = () => {
  try {
   
    const result = eval(`  (${ToCuAs7 || 0} - ${ToCuLi7 || 0}) `);
    setNewoCa7(result);
  } catch (error) {
    setNewoCa7("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa7();
}, [ToCuAs7,ToCuLi7]);


const sumNewoCa8 = () => {
  try {
   
    const result = eval(`  (${ToCuAs8 || 0} - ${ToCuLi8 || 0}) `);
    setNewoCa8(result);
  } catch (error) {
    setNewoCa8("Input all ");  
  }
};

useEffect(() => {
  sumNewoCa8();
}, [ToCuAs8,ToCuLi8]);




const sumCuRa1 = () => {
  try {
   
    const result = (eval(`  (${ToCuAs1 || 0} / ${ToCuLi1 || 0}) `)).toFixed(2);
    setCuRa1(result);
  } catch (error) {
    setCuRa1("Input all ");  
  }
};

useEffect(() => {
  sumCuRa1();
}, [ToCuAs1,ToCuLi1]);


const sumCuRa2 = () => {
  try {
   
    const result = (eval(`  (${ToCuAs2 || 0} / ${ToCuLi2 || 0}) `)).toFixed(2);
    setCuRa2(result);
  } catch (error) {
    setCuRa2("Input all ");  
  }
};

useEffect(() => {
  sumCuRa2();
}, [ToCuAs2,ToCuLi2]);


const sumCuRa3 = () => {
  try {
   
    const result = (eval(`  (${ToCuAs3 || 0} / ${ToCuLi3 || 0}) `)).toFixed(2);
    setCuRa3(result);
  } catch (error) {
    setCuRa3("Input all ");  
  }
};

useEffect(() => {
  sumCuRa3();
}, [ToCuAs3,ToCuLi3]);


const sumCuRa4 = () => {
  try {
   
    const result = eval(`  (${ToCuAs4 || 0} / ${ToCuLi4 || 0}) `);
    setCuRa4(result);
  } catch (error) {
    setCuRa4("Input all ");  
  }
};

useEffect(() => {
  sumCuRa4();
}, [ToCuAs4,ToCuLi4]);


const sumCuRa5 = () => {
  try {
   
    const result = eval(`  (${ToCuAs5 || 0} / ${ToCuLi5 || 0}) `);
    setCuRa5(result);
  } catch (error) {
    setCuRa5("Input all ");  
  }
};

useEffect(() => {
  sumCuRa5();
}, [ToCuAs5,ToCuLi5]);


const sumCuRa6 = () => {
  try {
   
    const result = eval(`  (${ToCuAs6 || 0} / ${ToCuLi6 || 0}) `);
    setCuRa6(result);
  } catch (error) {
    setCuRa6("Input all ");  
  }
};

useEffect(() => {
  sumCuRa6();
}, [ToCuAs6,ToCuLi6]);


const sumCuRa7 = () => {
  try {
   
    const result = eval(`  (${ToCuAs7 || 0} / ${ToCuLi7 || 0}) `);
    setCuRa7(result);
  } catch (error) {
    setCuRa7("Input all ");  
  }
};

useEffect(() => {
  sumCuRa7();
}, [ToCuAs7,ToCuLi7]);


const sumCuRa8 = () => {
  try {
   
    const result = eval(`  (${ToCuAs8 || 0} / ${ToCuLi8 || 0}) `);
    setCuRa8(result);
  } catch (error) {
    setCuRa8("Input all ");  
  }
};

useEffect(() => {
  sumCuRa8();
}, [ToCuAs8,ToCuLi8]);



const sumTolTnw1 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi1 || 0} + ${LoTeLi1 || 0}) - (${RevRes1 || 0}) / (${TaNeWo1 || 0}  `);
    setTolTnw1(result);
  } catch (error) {
    setTolTnw1("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw1();
}, [ToCuLi1,LoTeLi1,RevRes1,TaNeWo1]);


const sumTolTnw2 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi2 || 0} + ${LoTeLi2 || 0}) - (${RevRes2 || 0}) / (${TaNeWo2 || 0}  `);
    setTolTnw2(result);
  } catch (error) {
    setTolTnw2("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw2();
}, [ToCuLi2,LoTeLi2,RevRes2,TaNeWo2]);


const sumTolTnw3 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi3 || 0} + ${LoTeLi3 || 0}) - (${RevRes3 || 0}) / (${TaNeWo3 || 0}  `);
    setTolTnw3(result);
  } catch (error) {
    setTolTnw3("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw3();
}, [ToCuLi3,LoTeLi3,RevRes3,TaNeWo3]);


const sumTolTnw4 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi4 || 0} + ${LoTeLi4 || 0}) - (${RevRes4 || 0}) / (${TaNeWo4 || 0}  `);
    setTolTnw4(result);
  } catch (error) {
    setTolTnw4("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw4();
}, [ToCuLi4,LoTeLi4,RevRes4,TaNeWo4]);


const sumTolTnw5 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi5 || 0} + ${LoTeLi5 || 0}) - (${RevRes5 || 0}) / (${TaNeWo5 || 0}  `);
    setTolTnw5(result);
  } catch (error) {
    setTolTnw5("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw5();
}, [ToCuLi5,LoTeLi5,RevRes5,TaNeWo5]);


const sumTolTnw6 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi6 || 0} + ${LoTeLi6 || 0}) - (${RevRes6 || 0}) / (${TaNeWo6 || 0}  `);
    setTolTnw6(result);
  } catch (error) {
    setTolTnw6("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw6();
}, [ToCuLi6,LoTeLi6,RevRes6,TaNeWo6]);


const sumTolTnw7 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi7 || 0} + ${LoTeLi7 || 0}) - (${RevRes7 || 0}) / (${TaNeWo7 || 0}  `);
    setTolTnw7(result);
  } catch (error) {
    setTolTnw7("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw7();
}, [ToCuLi7,LoTeLi7,RevRes7,TaNeWo7]);


const sumTolTnw8 = () => {
  try {
   
    const result = eval(`  ((${ToCuLi8 || 0} + ${LoTeLi8 || 0}) - (${RevRes8 || 0}) / (${TaNeWo8 || 0}  `);
    setTolTnw8(result);
  } catch (error) {
    setTolTnw8("Input all ");  
  }
};

useEffect(() => {
  sumTolTnw8();
}, [ToCuLi8,LoTeLi8,RevRes8,TaNeWo8]);




const sumToTnQu1 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi1 || 0} - ${RevRes1 || 0}) / (${UnLoPr1 || 0} + ${TaNeWo1 || 0} )  `)).toFixed(2);
    setToTnQu1(result);
  } catch (error) {
    setToTnQu1("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu1();
}, [ToOuLi1,RevRes1,UnLoPr1,TaNeWo1]);


const sumToTnQu2 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi2 || 0} - ${RevRes2 || 0}) / (${UnLoPr2 || 0} + ${TaNeWo2 || 0} ) `)).toFixed(2);
    setToTnQu2(result);
  } catch (error) {
    setToTnQu2("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu2();
}, [ToOuLi2,RevRes2,UnLoPr2,TaNeWo2]);


const sumToTnQu3 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi3 || 0} - ${RevRes3 || 0}) / (${UnLoPr3 || 0} + ${TaNeWo3 || 0} ) `)).toFixed(2);
    setToTnQu3(result);
  } catch (error) {
    setToTnQu3("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu3();
}, [ToOuLi3,RevRes3,UnLoPr3,TaNeWo3]);


const sumToTnQu4 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi4 || 0} - ${RevRes4 || 0}) / (${UnLoPr4 || 0} + ${TaNeWo4 || 0} ) `)).toFixed(2);
    setToTnQu4(result);
  } catch (error) {
    setToTnQu4("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu4();
}, [ToOuLi4,RevRes4,UnLoPr4,TaNeWo4]);


const sumToTnQu5 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi5 || 0} - ${RevRes5 || 0}) / (${UnLoPr5 || 0} + ${TaNeWo5 || 0} ) `)).toFixed(2);
    setToTnQu5(result);
  } catch (error) {
    setToTnQu5("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu5();
}, [ToOuLi5,RevRes5,UnLoPr5,TaNeWo5]);


const sumToTnQu6 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi6 || 0} - ${RevRes6 || 0}) / (${UnLoPr6 || 0} + ${TaNeWo6 || 0} ) `)).toFixed(2);
    setToTnQu6(result);
  } catch (error) {
    setToTnQu6("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu6();
}, [ToOuLi6,RevRes6,UnLoPr6,TaNeWo6]);


const sumToTnQu7 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi7 || 0} - ${RevRes7 || 0}) / (${UnLoPr7 || 0} + ${TaNeWo7 || 0} ) `)).toFixed(2);
    setToTnQu7(result);
  } catch (error) {
    setToTnQu7("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu7();
}, [ToOuLi7,RevRes7,UnLoPr7,TaNeWo7]);


const sumToTnQu8 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi8 || 0} - ${RevRes8 || 0}) / (${UnLoPr8 || 0} + ${TaNeWo8 || 0} ) `)).toFixed(2);
    setToTnQu8(result);
  } catch (error) {
    setToTnQu8("Input all ");  
  }
};

useEffect(() => {
  sumToTnQu8();
}, [ToOuLi8,RevRes8,UnLoPr8,TaNeWo8]);



  
const sumRiFaSa2 = () => {
  try {
   
    const result = ((eval(`  (${NetSal2 || 0} - ${NetSal1 || 0} )/ ${NetSal1 || 0} `)).toFixed(2)).toFixed(2);
    setRiFaSa2(result);
  } catch (error) {
    setRiFaSa2("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa2();
}, [NetSal2,NetSal1]);

const sumRiFaSa3 = () => {
  try {
   
    const result = ((eval(`  (${NetSal3 || 0} - ${NetSal2 || 0} )/ ${NetSal2 || 0} `)).toFixed(2)).toFixed(2);
    setRiFaSa3(result);
  } catch (error) {
    setRiFaSa3("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa3();
}, [NetSal3,NetSal2]);

const sumRiFaSa4 = () => {
  try {
   
    const result = (eval(`  (${NetSal4 || 0} - ${NetSal3 || 0} )/ ${NetSal3 || 0} `)).toFixed(2);
    setRiFaSa4(result);
  } catch (error) {
    setRiFaSa4("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa4();
}, [NetSal4,NetSal3]);

const sumRiFaSa5 = () => {
  try {
   
    const result = (eval(`  (${NetSal5 || 0} - ${NetSal4 || 0} )/ ${NetSal4 || 0} `)).toFixed(2);
    setRiFaSa5(result);
  } catch (error) {
    setRiFaSa5("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa5();
}, [NetSal5,NetSal4]);

const sumRiFaSa6 = () => {
  try {
   
    const result = (eval(`  (${NetSal6 || 0} - ${NetSal5 || 0} )/ ${NetSal5 || 0} `)).toFixed(2);
    setRiFaSa6(result);
  } catch (error) {
    setRiFaSa6("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa6();
}, [NetSal6,NetSal5]);

const sumRiFaSa7 = () => {
  try {
   
    const result = (eval(`  (${NetSal7 || 0} - ${NetSal6 || 0} )/ ${NetSal6 || 0} `)).toFixed(2);
    setRiFaSa7(result);
  } catch (error) {
    setRiFaSa7("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa7();
}, [NetSal7,NetSal6]);

const sumRiFaSa8 = () => {
  try {
   
    const result = (eval(`  (${NetSal8 || 0} - ${NetSal7 || 0} )/ ${NetSal7 || 0} `)).toFixed(2);
    setRiFaSa8(result);
  } catch (error) {
    setRiFaSa8("Input all ");  
  }
};

useEffect(() => {
  sumRiFaSa8();
}, [NetSal8,NetSal7]);


  
const sumPbdSa1 = () => {
  try {
   
    const result = ((eval(`  (${pBdiT1 || 0} / ${NetSal1 || 0}) * 100`)).toFixed(2)).toFixed(2);
    setPbdSa1(result);
  } catch (error) {
    setPbdSa1("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa1();
}, [pBdiT1,NetSal1]);
  


const sumPbdSa2 = () => {
  try {
   
    const result = ((eval(`  (${pBdiT2 || 0} / ${NetSal2 || 0}) * 100`)).toFixed(2)).toFixed(2);
    setPbdSa2(result);
  } catch (error) {
    setPbdSa2("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa2();
}, [pBdiT2,NetSal2]);


const sumPbdSa3 = () => {
  try {
   
    const result = (eval(`  (${pBdiT3 || 0} / ${NetSal3 || 0}) * 100`)).toFixed(2);
    setPbdSa3(result);
  } catch (error) {
    setPbdSa3("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa3();
}, [pBdiT3,NetSal3]);


const sumPbdSa4 = () => {
  try {
   
    const result = (eval(`  (${pBdiT4 || 0} / ${NetSal4 || 0}) * 100`)).toFixed(2);
    setPbdSa4(result);
  } catch (error) {
    setPbdSa4("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa4();
}, [pBdiT4,NetSal4]);


const sumPbdSa5 = () => {
  try {
   
    const result = (eval(`  (${pBdiT5 || 0} / ${NetSal5 || 0}) * 100`)).toFixed(2);
    setPbdSa5(result);
  } catch (error) {
    setPbdSa5("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa5();
}, [pBdiT5,NetSal5]);


const sumPbdSa6 = () => {
  try {
   
    const result = (eval(`  (${pBdiT6 || 0} / ${NetSal6 || 0}) * 100`)).toFixed(2);
    setPbdSa6(result);
  } catch (error) {
    setPbdSa6("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa6();
}, [pBdiT6,NetSal6]);


const sumPbdSa7 = () => {
  try {
   
    const result = (eval(`  (${pBdiT7 || 0} / ${NetSal7 || 0}) * 100`)).toFixed(2);
    setPbdSa7(result);
  } catch (error) {
    setPbdSa7("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa7();
}, [pBdiT7,NetSal7]);
  

const sumPbdSa8 = () => {
  try {
   
    const result = (eval(`  (${pBdiT8 || 0} / ${NetSal8 || 0}) * 100`)).toFixed(2);
    setPbdSa8(result);
  } catch (error) {
    setPbdSa8("Input all ");  
  }
};

useEffect(() => {
  sumPbdSa8();
}, [pBdiT8,NetSal8]);



  
const sumOpCoSal1 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo1 || 0} / ${NetSal1 || 0}) `)).toFixed(2);
    setOpCoSal1(result);
  } catch (error) {
    setOpCoSal1("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal1();
}, [opProLo1,NetSal1]);

const sumOpCoSal2 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo2 || 0} / ${NetSal2 || 0}) `)).toFixed(2);
    setOpCoSal2(result);
  } catch (error) {
    setOpCoSal2("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal2();
}, [opProLo2,NetSal2]);




const sumOpCoSal3 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo3 || 0} / ${NetSal3 || 0}) `)).toFixed(2);
    setOpCoSal3(result);
  } catch (error) {
    setOpCoSal3("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal3();
}, [opProLo3,NetSal3]);


const sumOpCoSal4 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo4 || 0} / ${NetSal4 || 0}) `)).toFixed(2);
    setOpCoSal4(result);
  } catch (error) {
    setOpCoSal4("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal4();
}, [opProLo4,NetSal4]);

const sumOpCoSal5 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo5 || 0} / ${NetSal5 || 0}) `)).toFixed(2);
    setOpCoSal5(result);
  } catch (error) {
    setOpCoSal5("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal5();
}, [opProLo5,NetSal5]);

const sumOpCoSal6 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo6 || 0} / ${NetSal6 || 0}) `)).toFixed(2);
    setOpCoSal6(result);
  } catch (error) {
    setOpCoSal6("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal6();
}, [opProLo6,NetSal6]);


const sumOpCoSal7 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo7 || 0} / ${NetSal7 || 0}) `)).toFixed(2);
    setOpCoSal7(result);
  } catch (error) {
    setOpCoSal7("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal7();
}, [opProLo7,NetSal7]);

const sumOpCoSal8 = () => {
  try {
   
    const result = (eval(` 100 -(${ opProLo8 || 0} / ${NetSal8 || 0}) `)).toFixed(2);
    setOpCoSal8(result);
  } catch (error) {
    setOpCoSal8("Input all ");  
  }
};

useEffect(() => {
  sumOpCoSal8();
}, [opProLo8,NetSal8]);


const sumNePrSa1 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa1 || 0} / ${NetSal1 || 0})  *100`)).toFixed(2);
    setNePrSa1(result);
  } catch (error) {
    setNePrSa1("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa1();
}, [NePrafTa1,NePrafTa1]);

const sumNePrSa2 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa2 || 0} / ${NetSal2 || 0})  * 100`)).toFixed(2);
    setNePrSa2(result);
  } catch (error) {
    setNePrSa2("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa2();
}, [NePrafTa2,NePrafTa2]);

const sumNePrSa3 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa3 || 0} / ${NetSal3 || 0})  * 100`)).toFixed(2);
    setNePrSa3(result);
  } catch (error) {
    setNePrSa3("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa3();
}, [NePrafTa3,NePrafTa3]);

const sumNePrSa4 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa4 || 0} / ${NetSal4 || 0})  * 100`)).toFixed(2);
    setNePrSa4(result);
  } catch (error) {
    setNePrSa4("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa4();
}, [NePrafTa4,NePrafTa4]);

const sumNePrSa5 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa5 || 0} / ${NetSal5 || 0})  * 100`)).toFixed(2);
    setNePrSa5(result);
  } catch (error) {
    setNePrSa5("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa5();
}, [NePrafTa5,NePrafTa5]);

const sumNePrSa6 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa6 || 0} / ${NetSal6 || 0})  * 100`)).toFixed(2);
    setNePrSa6(result);
  } catch (error) {
    setNePrSa6("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa6();
}, [NePrafTa6,NePrafTa6]);

const sumNePrSa7 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa7 || 0} / ${NetSal7 || 0})  * 100`)).toFixed(2);
    setNePrSa7(result);
  } catch (error) {
    setNePrSa7("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa7();
}, [NePrafTa7,NePrafTa7]);

const sumNePrSa8 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa8 || 0} / ${NetSal8 || 0})  * 100`)).toFixed(2);
    setNePrSa8(result);
  } catch (error) {
    setNePrSa8("Input all ");  
  }
};

useEffect(() => {
  sumNePrSa8();
}, [NePrafTa8,NePrafTa8]);



  
const sumNePrTnw1 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa1 || 0} / ${TaNeWo1 || 0})  *100`)).toFixed(2);
    setNePrTnw1(result);
  } catch (error) {
    setNePrTnw1("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw1();
}, [NePrafTa1,TaNeWo1]);


  
const sumNePrTnw2 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa2 || 0} / ${TaNeWo2 || 0})  *100`)).toFixed(2);
    setNePrTnw2(result);
  } catch (error) {
    setNePrTnw2("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw2();
}, [NePrafTa2,TaNeWo2]);


  
const sumNePrTnw3 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa3 || 0} / ${TaNeWo3 || 0})  *100`)).toFixed(2);
    setNePrTnw3(result);
  } catch (error) {
    setNePrTnw3("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw3();
}, [NePrafTa3,TaNeWo3]);


  
const sumNePrTnw4 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa4 || 0} / ${TaNeWo4 || 0})  *100`)).toFixed(2);
    setNePrTnw4(result);
  } catch (error) {
    setNePrTnw4("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw4();
}, [NePrafTa4,TaNeWo4]);


  
const sumNePrTnw5 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa5 || 0} / ${TaNeWo5 || 0})  *100`)).toFixed(2);
    setNePrTnw5(result);
  } catch (error) {
    setNePrTnw5("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw5();
}, [NePrafTa5,TaNeWo5]);


  
const sumNePrTnw6 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa6 || 0} / ${TaNeWo6 || 0})  *100`)).toFixed(2);
    setNePrTnw6(result);
  } catch (error) {
    setNePrTnw6("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw6();
}, [NePrafTa6,TaNeWo6]);


  
const sumNePrTnw7 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa7 || 0} / ${TaNeWo7 || 0})  *100`)).toFixed(2);
    setNePrTnw7(result);
  } catch (error) {
    setNePrTnw7("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw7();
}, [NePrafTa7,TaNeWo7]);


  
const sumNePrTnw8 = () => {
  try {
   
    const result = (eval(`  (${NePrafTa8 || 0} / ${TaNeWo8 || 0})  *100`)).toFixed(2);
    setNePrTnw8(result);
  } catch (error) {
    setNePrTnw8("Input all ");  
  }
};

useEffect(() => {
  sumNePrTnw8();
}, [NePrafTa8,TaNeWo8]);


  
const sumSaTnw1 = () => {
  try {
   
    const result = (eval(`  (${NetSal1 || 0} / ${TaNeWo1 || 0}) `)).toFixed(2);
    setSaTnw1(result);
  } catch (error) {
    setSaTnw1("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw1();
}, [NetSal1,TaNeWo1]);

  
const sumSaTnw2 = () => {
  try {
   
    const result = (eval(`  (${NetSal2 || 0} / ${TaNeWo2 || 0}) `)).toFixed(2);
    setSaTnw2(result);
  } catch (error) {
    setSaTnw2("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw2();
}, [NetSal2,TaNeWo2]);

  
const sumSaTnw3 = () => {
  try {
   
    const result = (eval(`  (${NetSal3 || 0} / ${TaNeWo3 || 0}) `)).toFixed(2);
    setSaTnw3(result);
  } catch (error) {
    setSaTnw3("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw3();
}, [NetSal3,TaNeWo3]);

  
const sumSaTnw4 = () => {
  try {
   
    const result = (eval(`  (${NetSal4 || 0} / ${TaNeWo4 || 0}) `)).toFixed(2);
    setSaTnw4(result);
  } catch (error) {
    setSaTnw4("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw4();
}, [NetSal4,TaNeWo4]);

  
const sumSaTnw5 = () => {
  try {
   
    const result = (eval(`  (${NetSal5 || 0} / ${TaNeWo5 || 0}) `)).toFixed(2);
    setSaTnw5(result);
  } catch (error) {
    setSaTnw5("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw5();
}, [NetSal5,TaNeWo5]);

  
const sumSaTnw6 = () => {
  try {
   
    const result = (eval(`  (${NetSal6 || 0} / ${TaNeWo6 || 0}) `)).toFixed(2);
    setSaTnw6(result);
  } catch (error) {
    setSaTnw6("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw6();
}, [NetSal6,TaNeWo6]);

  
const sumSaTnw7 = () => {
  try {
   
    const result = (eval(`  (${NetSal7 || 0} / ${TaNeWo7 || 0}) `)).toFixed(2);
    setSaTnw7(result);
  } catch (error) {
    setSaTnw7("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw7();
}, [NetSal7,TaNeWo7]);

  
const sumSaTnw8 = () => {
  try {
   
    const result = (eval(`  (${NetSal8 || 0} / ${TaNeWo8 || 0}) `)).toFixed(2);
    setSaTnw8(result);
  } catch (error) {
    setSaTnw8("Input all ");  
  }
};

useEffect(() => {
  sumSaTnw8();
}, [NetSal8,TaNeWo8]);


const sumToBaBor1 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob1 || 0} + ${WcFrBI1 || 0})  `)).toFixed(2);
    setToBaBor1(result);
  } catch (error) {
    setToBaBor1("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor1();
}, [wcBrIob1,WcFrBI1]);


const sumToBaBor2 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob2 || 0} + ${WcFrBI2 || 0})  `)).toFixed(2);
    setToBaBor2(result);
  } catch (error) {
    setToBaBor2("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor2();
}, [wcBrIob2,WcFrBI2]);


const sumToBaBor3 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob3 || 0} + ${WcFrBI3 || 0})  `)).toFixed(2);
    setToBaBor3(result);
  } catch (error) {
    setToBaBor3("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor3();
}, [wcBrIob3,WcFrBI3]);


const sumToBaBor4 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob4 || 0} + ${WcFrBI4 || 0})  `)).toFixed(2);
    setToBaBor4(result);
  } catch (error) {
    setToBaBor4("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor4();
}, [wcBrIob4,WcFrBI4]);


const sumToBaBor5 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob5 || 0} + ${WcFrBI5 || 0})  `)).toFixed(2);
    setToBaBor5(result);
  } catch (error) {
    setToBaBor5("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor5();
}, [wcBrIob5,WcFrBI5]);


const sumToBaBor6 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob6 || 0} + ${WcFrBI6 || 0})  `)).toFixed(2);
    setToBaBor6(result);
  } catch (error) {
    setToBaBor6("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor6();
}, [wcBrIob6,WcFrBI6]);


const sumToBaBor7 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob7 || 0} + ${WcFrBI7 || 0})  `)).toFixed(2);
    setToBaBor7(result);
  } catch (error) {
    setToBaBor7("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor7();
}, [wcBrIob7,WcFrBI7]);


const sumToBaBor8 = () => {
  try {
   
    const result = (eval(`  (${wcBrIob8 || 0} + ${WcFrBI8 || 0})  `)).toFixed(2);
    setToBaBor8(result);
  } catch (error) {
    setToBaBor8("Input all ");  
  }
};

useEffect(() => {
  sumToBaBor8();
}, [wcBrIob8,WcFrBI8]);


const sumInDeBaBo2 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor2 || 0} - ${ToBaBor1 || 0}) / ${ToBaBor1 || 0}`)).toFixed(2);
    setInDeBaBo2(result);
  } catch (error) {
    setInDeBaBo2("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo2();
}, [ToBaBor2,ToBaBor1]);

const sumInDeBaBo3 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor3 || 0} - ${ToBaBor2 || 0}) / ${ToBaBor2 || 0}`)).toFixed(2);
    setInDeBaBo3(result);
  } catch (error) {
    setInDeBaBo3("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo3();
}, [ToBaBor3,ToBaBor2]);



const sumInDeBaBo4 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor4 || 0} - ${ToBaBor3 || 0}) / ${ToBaBor3 || 0}`)).toFixed(2);
    setInDeBaBo4(result);
  } catch (error) {
    setInDeBaBo4("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo4();
}, [ToBaBor4,ToBaBor3]);



const sumInDeBaBo5 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor5 || 0} - ${ToBaBor4 || 0}) / ${ToBaBor4 || 0}`)).toFixed(2);
    setInDeBaBo5(result);
  } catch (error) {
    setInDeBaBo5("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo5();
}, [ToBaBor5,ToBaBor4]);



const sumInDeBaBo6 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor6 || 0} - ${ToBaBor5 || 0}) / ${ToBaBor5 || 0}`)).toFixed(2);
    setInDeBaBo6(result);
  } catch (error) {
    setInDeBaBo6("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo6();
}, [ToBaBor6,ToBaBor5]);



const sumInDeBaBo7 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor7 || 0} - ${ToBaBor6 || 0}) / ${ToBaBor6 || 0}`)).toFixed(2);
    setInDeBaBo7(result);
  } catch (error) {
    setInDeBaBo7("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo7();
}, [ToBaBor7,ToBaBor6]);


const sumInDeBaBo8 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor8 || 0} - ${ToBaBor7 || 0}) / ${ToBaBor7 || 0}`)).toFixed(2);
    setInDeBaBo8(result);
  } catch (error) {
    setInDeBaBo8("Input all ");  
  }
};

useEffect(() => {
  sumInDeBaBo8();
}, [ToBaBor8,ToBaBor7]);


const sumBaFiCuAs1 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor1 || 0} / ${ToCuAs1 || 0})  *100`)).toFixed(2);
    setBaFiCuAs1(result);
  } catch (error) {
    setBaFiCuAs1("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs1();
}, [ToBaBor1,ToCuAs1]);
const sumBaFiCuAs2 = () => {
  try {
   
    const result =(eval(`  (${ToBaBor2 || 0} / ${ToCuAs2 || 0})  *100`)).toFixed(2);
    setBaFiCuAs2(result);
  } catch (error) {
    setBaFiCuAs2("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs2();
}, [ToBaBor2,ToCuAs2]);

const sumBaFiCuAs3 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor3 || 0} / ${ToCuAs3 || 0})  *100`)).toFixed(2);
    setBaFiCuAs3(result);
  } catch (error) {
    setBaFiCuAs3("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs3();
}, [ToBaBor3,ToCuAs3]);
const sumBaFiCuAs4 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor4 || 0} / ${ToCuAs4 || 0})  *100`)).toFixed(2);
    setBaFiCuAs4(result);
  } catch (error) {
    setBaFiCuAs4("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs4();
}, [ToBaBor4,ToCuAs4]);

const sumBaFiCuAs5 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor5 || 0} / ${ToCuAs5 || 0})  *100`)).toFixed(2);
    setBaFiCuAs5(result);
  } catch (error) {
    setBaFiCuAs5("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs5();
}, [ToBaBor5,ToCuAs5]);

const sumBaFiCuAs6 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor6 || 0} / ${ToCuAs6 || 0})  *100`)).toFixed(2);
    setBaFiCuAs6(result);
  } catch (error) {
    setBaFiCuAs6("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs6();
}, [ToBaBor6,ToCuAs6]);

const sumBaFiCuAs7 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor7 || 0} / ${ToCuAs7 || 0})  *100`)).toFixed(2);
    setBaFiCuAs7(result);
  } catch (error) {
    setBaFiCuAs7("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs7();
}, [ToBaBor7,ToCuAs7]);

const sumBaFiCuAs8 = () => {
  try {
   
    const result = (eval(`  (${ToBaBor8 || 0} / ${ToCuAs8 || 0})  *100`)).toFixed(2);
    setBaFiCuAs8(result);
  } catch (error) {
    setBaFiCuAs8("Input all ");  
  }
};

useEffect(() => {
  sumBaFiCuAs8();
}, [ToBaBor8,ToCuAs8]);


const sumInRecSa1 = () => {
  try {
   
    const result = (eval(`  (${raMa1 || 0} + ${stkInPr1 || 0} +  (${FinishGo1 || 0} + (${conSuSp1 || 0} + 
      (${TrDeb1 || 0})   *365 / (${NetSal1 || 0}   `)).toFixed(2);
    setInRecSa1(result);
  } catch (error) {
    setInRecSa1("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa1();
}, [raMa1,stkInPr1,FinishGo1 ,conSuSp1 ,TrDeb1, NetSal1]);

const sumInRecSa2 = () => {
  try {
   
    const result = (eval(`  (${raMa2 || 0} + ${stkInPr2 || 0} +  (${FinishGo2 || 0} + (${conSuSp2 || 0} + 
      (${TrDeb2 || 0})   *365 / (${NetSal2 || 0}   `)).toFixed(2);
    setInRecSa2(result);
  } catch (error) {
    setInRecSa2("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa2();
}, [raMa2,stkInPr2,FinishGo2 ,conSuSp2 ,TrDeb2, NetSal2]);

const sumInRecSa3 = () => {
  try {
   
    const result = (eval(`  (${raMa3 || 0} + ${stkInPr3 || 0} +  (${FinishGo3 || 0} + (${conSuSp3 || 0} + 
      (${TrDeb3 || 0})   *365 / (${NetSal3 || 0}   `)).toFixed(2);
    setInRecSa3(result);
  } catch (error) {
    setInRecSa3("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa3();
}, [raMa3,stkInPr3,FinishGo3 ,conSuSp3 ,TrDeb3, NetSal3]);

const sumInRecSa4 = () => {
  try {
   
    const result = (eval(`  (${raMa4 || 0} + ${stkInPr4 || 0} +  (${FinishGo4 || 0} + (${conSuSp4 || 0} + 
      (${TrDeb4 || 0})   *365 / (${NetSal4 || 0}   `)).toFixed(2);
    setInRecSa4(result);
  } catch (error) {
    setInRecSa4("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa4();
}, [raMa4,stkInPr4,FinishGo4 ,conSuSp4 ,TrDeb4, NetSal4]);

const sumInRecSa5 = () => {
  try {
   
    const result = (eval(`  (${raMa5 || 0} + ${stkInPr5 || 0} +  (${FinishGo5 || 0} + (${conSuSp5 || 0} + 
      (${TrDeb5 || 0})   *365 / (${NetSal5 || 0}   `)).toFixed(2);
    setInRecSa5(result);
  } catch (error) {
    setInRecSa5("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa5();
}, [raMa5,stkInPr5,FinishGo5 ,conSuSp5 ,TrDeb5, NetSal5]);

const sumInRecSa6 = () => {
  try {
   
    const result = (eval(`  (${raMa6 || 0} + ${stkInPr6 || 0} +  (${FinishGo6 || 0} + (${conSuSp6 || 0} + 
      (${TrDeb6 || 0})   *365 / (${NetSal6 || 0}   `)).toFixed(2);
    setInRecSa6(result);
  } catch (error) {
    setInRecSa6("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa6();
}, [raMa6,stkInPr6,FinishGo6 ,conSuSp6 ,TrDeb6, NetSal6]);

const sumInRecSa7 = () => {
  try {
   
    const result = (eval(`  (${raMa7 || 0} + ${stkInPr7 || 0} +  (${FinishGo7 || 0} + (${conSuSp7 || 0} + 
      (${TrDeb7 || 0})   *365 / (${NetSal7 || 0}   `)).toFixed(2);
    setInRecSa7(result);
  } catch (error) {
    setInRecSa7("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa7();
}, [raMa7,stkInPr7,FinishGo7 ,conSuSp7 ,TrDeb7, NetSal7]);
const sumInRecSa8 = () => {
  try {
   
    const result = (eval(`  (${raMa8 || 0} + ${stkInPr8 || 0} +  (${FinishGo8 || 0} + (${conSuSp8 || 0} + 
      (${TrDeb8 || 0})   *365 / (${NetSal8 || 0}   `)).toFixed(2);
    setInRecSa8(result);
  } catch (error) {
    setInRecSa8("Input all ");  
  }
};

useEffect(() => {
  sumInRecSa8();
}, [raMa8,stkInPr8,FinishGo8 ,conSuSp8 ,TrDeb8, NetSal8]);

const sumPbdInt1 = () => {
  try {
   
    const result = (eval(`  (${pBdiT1 || 0} / ${ToIa1 || 0}) `)).toFixed(2);
    setPbdInt1(result);
  } catch (error) {
    setPbdInt1("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt1();
}, [pBdiT1,ToIa1]);

 
const sumPbdInt2 = () => {
  try {
   
    const result = (eval(`  (${pBdiT2 || 0} / ${ToIa2 || 0}) `)).toFixed(2);
    setPbdInt2(result);
  } catch (error) {
    setPbdInt2("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt2();
}, [pBdiT2,ToIa2]);

 
const sumPbdInt3 = () => {
  try {
   
    const result = (eval(`  (${pBdiT3 || 0} / ${ToIa3 || 0}) `)).toFixed(2);
    setPbdInt3(result);
  } catch (error) {
    setPbdInt3("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt3();
}, [pBdiT3,ToIa3]);

 
const sumPbdInt4 = () => {
  try {
   
    const result = (eval(`  (${pBdiT4 || 0} / ${ToIa4 || 0}) `)).toFixed(2);
    setPbdInt4(result);
  } catch (error) {
    setPbdInt4("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt4();
}, [pBdiT4,ToIa4]);

 
const sumPbdInt5 = () => {
  try {
   
    const result = (eval(`  (${pBdiT5 || 0} / ${ToIa5 || 0}) `)).toFixed(2);
    setPbdInt5(result);
  } catch (error) {
    setPbdInt5("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt5();
}, [pBdiT5,ToIa5]);

 
const sumPbdInt6 = () => {
  try {
   
    const result = (eval(`  (${pBdiT6 || 0} / ${ToIa6 || 0}) `)).toFixed(2);
    setPbdInt6(result);
  } catch (error) {
    setPbdInt6("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt6();
}, [pBdiT6,ToIa6]);

 
const sumPbdInt7 = () => {
  try {
   
    const result = (eval(`  (${pBdiT7 || 0} / ${ToIa7 || 0}) `));
    setPbdInt7(result);
  } catch (error) {
    setPbdInt7("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt7();
}, [pBdiT7,ToIa7]);

 
const sumPbdInt8 = () => {
  try {
   
    const result = (eval(`  (${pBdiT8 || 0} / ${ToIa8 || 0}) `)).toFixed(2);
    setPbdInt8(result);
  } catch (error) {
    setPbdInt8("Input all ");  
  }
};

useEffect(() => {
  sumPbdInt8();
}, [pBdiT8,ToIa8]);


const sumToTnAdj1 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi1 || 0} - ${RevRes1 || 0}) /  (${UnLoPr1 || 0} + ${TaNeWo1 || 0})`)).toFixed(2);
    setToTnAdj1(result);
  } catch (error) {
    setToTnAdj1("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj1();
}, [ToOuLi1,RevRes1,UnLoPr1,TaNeWo1]);

const sumToTnAdj2 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi2 || 0} - ${RevRes2 || 0}) /  (${UnLoPr2 || 0} + ${TaNeWo2 || 0})`)).toFixed(2);
    setToTnAdj2(result);
  } catch (error) {
    setToTnAdj2("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj2();
}, [ToOuLi2,RevRes2,UnLoPr2,TaNeWo2]);

const sumToTnAdj3 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi3 || 0} - ${RevRes3 || 0}) /  (${UnLoPr3 || 0} + ${TaNeWo3 || 0})`)).toFixed(2);
    setToTnAdj3(result);
  } catch (error) {
    setToTnAdj3("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj3();
}, [ToOuLi3,RevRes3,UnLoPr3,TaNeWo3]);

const sumToTnAdj4 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi4 || 0} - ${RevRes4 || 0}) /  (${UnLoPr4 || 0} + ${TaNeWo4 || 0})`)).toFixed(2);
    setToTnAdj4(result);
  } catch (error) {
    setToTnAdj4("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj4();
}, [ToOuLi4,RevRes4,UnLoPr4,TaNeWo4]);


const sumToTnAdj5 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi5 || 0} - ${RevRes5 || 0}) /  (${UnLoPr5 || 0} + ${TaNeWo5 || 0})`)).toFixed(2);
    setToTnAdj5(result);
  } catch (error) {
    setToTnAdj5("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj5();
}, [ToOuLi5,RevRes5,UnLoPr5,TaNeWo5]);

const sumToTnAdj6 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi6 || 0} - ${RevRes6 || 0}) /  (${UnLoPr6 || 0} + ${TaNeWo6 || 0})`)).toFixed(2);
    setToTnAdj6(result);
  } catch (error) {
    setToTnAdj6("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj6();
}, [ToOuLi6,RevRes6,UnLoPr6,TaNeWo6]);

const sumToTnAdj7 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi7 || 0} - ${RevRes7 || 0}) /  (${UnLoPr7 || 0} + ${TaNeWo7 || 0})`)).toFixed(2);
    setToTnAdj7(result);
  } catch (error) {
    setToTnAdj7("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj7();
}, [ToOuLi7,RevRes7,UnLoPr7,TaNeWo7]);

const sumToTnAdj8 = () => {
  try {
   
    const result = (eval(`  (${ToOuLi8 || 0} - ${RevRes8 || 0}) /  (${UnLoPr8 || 0} + ${TaNeWo8 || 0})`)).toFixed(2);
    setToTnAdj8(result);
  } catch (error) {
    setToTnAdj8("Input all ");  
  }
};

useEffect(() => {
  sumToTnAdj8();
}, [ToOuLi8,RevRes8,UnLoPr8,TaNeWo8]);





const sumFuDeTnw1 = () => {
  try {
   
    const result = (eval(`  ((${LoTeLi1 || 0} + ${OthTerLib1 || 0} + ${TlduBa1 || 0})-(${UnLoPr1 || 0} + ${RevRes1 || 0})) / ${TaNeWo1 || 0} `)).toFixed(2);
    setFuDeTnw1(result);
  } catch (error) {
    setFuDeTnw1("Input all ");  
  }
};

useEffect(() => {
  sumFuDeTnw1();
}, [LoTeLi1,OthTerLib1,TlduBa1,UnLoPr1,RevRes1,TaNeWo1]);


const sumFuDeTnw2 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi2 || 0} + ${OthTerLib2 || 0} + ${TlduBa2 || 0})-(${UnLoPr2 || 0} + ${RevRes2 || 0})) / ${TaNeWo2 || 0} `)).toFixed(2);
  setFuDeTnw2(result);
} catch (error) {
  setFuDeTnw2("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw2();
}, [LoTeLi2,OthTerLib2,TlduBa2,UnLoPr2,RevRes2,TaNeWo2]);


const sumFuDeTnw3 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi3 || 0} + ${OthTerLib3 || 0} + ${TlduBa3 || 0})-(${UnLoPr3 || 0} + ${RevRes3 || 0})) / ${TaNeWo3 || 0} `)).toFixed(2);
  setFuDeTnw3(result);
} catch (error) {
  setFuDeTnw3("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw3();
}, [LoTeLi3,OthTerLib3,TlduBa3,UnLoPr3,RevRes3,TaNeWo3]);


const sumFuDeTnw4 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi4 || 0} + ${OthTerLib4 || 0} + ${TlduBa4 || 0})-(${UnLoPr4 || 0} + ${RevRes4 || 0})) / ${TaNeWo4 || 0} `)).toFixed(2);
  setFuDeTnw4(result);
} catch (error) {
  setFuDeTnw4("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw4();
}, [LoTeLi4,OthTerLib4,TlduBa4,UnLoPr4,RevRes4,TaNeWo4]);


const sumFuDeTnw5 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi5 || 0} + ${OthTerLib5 || 0} + ${TlduBa5 || 0})-(${UnLoPr5 || 0} + ${RevRes5 || 0})) / ${TaNeWo5 || 0} `)).toFixed(2);
  setFuDeTnw5(result);
} catch (error) {
  setFuDeTnw5("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw5();
}, [LoTeLi5,OthTerLib5,TlduBa5,UnLoPr5,RevRes5,TaNeWo5]);


const sumFuDeTnw6 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi6 || 0} + ${OthTerLib6 || 0} + ${TlduBa6 || 0})-(${UnLoPr6 || 0} + ${RevRes6 || 0})) / ${TaNeWo6 || 0} `)).toFixed(2);
  setFuDeTnw6(result);
} catch (error) {
  setFuDeTnw6("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw6();
}, [LoTeLi6,OthTerLib6,TlduBa6,UnLoPr6,RevRes6,TaNeWo6]);


const sumFuDeTnw7 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi7 || 0} + ${OthTerLib7 || 0} + ${TlduBa7 || 0})-(${UnLoPr7 || 0} + ${RevRes7 || 0})) / ${TaNeWo7 || 0} `)).toFixed(2);
  setFuDeTnw7(result);
} catch (error) {
  setFuDeTnw7("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw7();
}, [LoTeLi7,OthTerLib7,TlduBa7,UnLoPr7,RevRes7,TaNeWo7]);


const sumFuDeTnw8 = () => {
try {
 
  const result = (eval(`  ((${LoTeLi8 || 0} + ${OthTerLib8 || 0} + ${TlduBa8 || 0})-(${UnLoPr8 || 0} + ${RevRes8 || 0})) / ${TaNeWo8 || 0} `)).toFixed(2);
  setFuDeTnw8(result);
} catch (error) {
  setFuDeTnw8("Input all ");  
}
};

useEffect(() => {
sumFuDeTnw8();
}, [LoTeLi8,OthTerLib8,TlduBa8,UnLoPr8,RevRes8,TaNeWo8]);






































  












  
  
  

  
  





































































































































  
  
  
  
  























  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center ">
        <div className="text-center">
          <h3 className="mt-4 font-bold text-xl items-center  ">
            Astral India Ltd
          </h3>
          <h4 className="items-center">A/c : M/s. Premier Fridge (P) Ltd.</h4>
        </div>
      </div>

      <div className=" ">
        <Container>
          <Row>
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl"
            >
              IV COMPARATIVE RATIOS
            </Col>

            <Col className="border border-solid" lg="8">
              <Row className="flex justify-center font-bold text-xl mb-3">
                For the year ended/ending (Rs. in Lacs)
              </Row>

              <Row>
                <Col className="text-center border border-solid">2020</Col>

                <Col className="text-center border border-solid">2021</Col>

                <Col className="text-center border border-solid">2022</Col>

                <Col className="text-center border border-solid">2023</Col>

                <Col className="text-center border border-solid">2024</Col>

                <Col className="text-center border border-solid">2025</Col>

                <Col className="text-center border border-solid">2026</Col>

                <Col className="text-center border border-solid">2027</Col>
              </Row>

              <Row className="text-center">
                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">
                  Projected
                </Col>

                <Col className="text-center border-r border-solid">
                  Projected
                </Col>

                <Col>Projected</Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              III PROFITABILITY RATIOS:
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Net Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NetSal2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Consumption of Raw Materials
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoRaMa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Production
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfPr1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoOfPr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfPr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { CoOfPr4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { CoOfPr5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { CoOfPr6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfPr7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfPr8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoOfSa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSa8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Production at Sale Value
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {PoAtSaVa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PoAtSaVa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Production -Depn/Sales+inc in FG
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoPrDeSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoPrDeSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Sales -Depn/Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoOfSaDe2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoOfSaDe8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              R M / Production Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {RmPrSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RmPrSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / Sales%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetPrSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operaing Cost / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {OpCoSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Mfg Exp / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MfgExCo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MfgExCo8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Selling/Admn Exp/Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {SeAdExCo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SeAdExCo8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fin. Charges / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {FiChCoSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiChCoSa8}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              II  FINANCIAL  INDICATORS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Tangible Net Worth ( TNW )
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TaNeWo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase / Decrease 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDec2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDec8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW (Adjusted) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TwQuEq2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW ( Quasi Equity) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TnwQuEq2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TnwQuEq8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Working Capital (NWC)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NewoCa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase / Decrease 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InDec2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InDec3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDec4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDec5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDec6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDec7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDec8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Current Ratio
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CuRa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CuRa8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL  /  T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TolTnw2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL  /  T N W (Quasi Equity)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToTnQu2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL /TNW (Adjusted)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToTnAdj2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj8}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Funded Debt / T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {FuDeTnw2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw8}
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              III  PROFITABILITY RATIOS:
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NET SALES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetSal2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              % rise (+) / fall (-) in sales 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
        
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {RiFaSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RiFaSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operating Profit 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { opProLo1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { opProLo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { opProLo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { opProLo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { opProLo8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              P B D I T
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { pBdiT1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { pBdiT2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NET  PROFIT 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NePrafTa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               Depreciation
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Depre1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {Depre2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Depre3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Depre4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Depre5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Depre6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Depre7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Depre8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cash accruals
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NeCaAcc2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              PBDIT/ Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {PbdSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operating Cost / Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {OpCoSal2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OpCoSal8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / Sales (%)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NePrSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / TNW (%)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NePrTnw2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrTnw8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Sales / T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {SaTnw2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SaTnw8}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              IV  BANK FINANCE :
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Total Bank Borrowings
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToBaBor2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToBaBor8}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inc/ dec in Bank Borrowings%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InDeBaBo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InDeBaBo8}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Bank Finance / Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {BaFiCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {BaFiCuAs8}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inv + Receivables/ Sales (days)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InRecSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InRecSa8}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              PBDIT/ Interest
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {PbdInt2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PbdInt8}
            </Col>
          </Row>







        </Container>
        <div className="flex items-center justify-center">
        <hr className="sm:w-full h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex justify-around items-center py-6">
        <div>
          <p className="sm:text-sm text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case">
            Qartelz FinTech
          </p>
        </div>
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
            Copyright  page by Qartelz FinTech Team
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RaTio;
