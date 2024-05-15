import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';


const Ff = () => {





  

  
  const[DeciTeLo1,setDeciTeLo1] = useState('');
  const[DeciTeLo2,setDeciTeLo2] = useState('');
  const[DeciTeLo3,setDeciTeLo3] = useState('');
  const[DeciTeLo4,setDeciTeLo4] = useState('');
  const[DeciTeLo5,setDeciTeLo5] = useState('');
  const[DeciTeLo6,setDeciTeLo6] = useState('');
  const[DeciTeLo7,setDeciTeLo7] = useState('');



  
  
  
  
  
  
  
  
  
  
  


  
  const TeLoIn2= localStorage.getItem('TeLoIn2'); 
  const TeLoIn3= localStorage.getItem('TeLoIn3');
  const TeLoIn4= localStorage.getItem('TeLoIn4');
  const TeLoIn5= localStorage.getItem('TeLoIn5');
  const TeLoIn6= localStorage.getItem('TeLoIn6');
  const TeLoIn7= localStorage.getItem('TeLoIn7');
  const TeLoIn8= localStorage.getItem('TeLoIn8');



  const TeLoOtB1= localStorage.getItem('TeLoOtB1');  //TeLoOtB1 c41 asset
  const TeLoOtB2= localStorage.getItem('TeLoOtB2');
  const TeLoOtB3= localStorage.getItem('TeLoOtB3');
  const TeLoOtB4= localStorage.getItem('TeLoOtB4');
  const TeLoOtB5= localStorage.getItem('TeLoOtB5');
  const TeLoOtB6= localStorage.getItem('TeLoOtB6');
  const TeLoOtB7= localStorage.getItem('TeLoOtB7');
  const TeLoOtB8= localStorage.getItem('TeLoOtB8');



  
  const TeLoIo2= localStorage.getItem('TeLoIo2');  //TeLoIo2  c40 asset
  const TeLoIo3= localStorage.getItem('TeLoIo3');
  const TeLoIo4= localStorage.getItem('TeLoIo4');
  const TeLoIo5= localStorage.getItem('TeLoIo5');
  const TeLoIo6= localStorage.getItem('TeLoIo6');
  const TeLoIo7= localStorage.getItem('TeLoIo7');
  const TeLoIo8= localStorage.getItem('TeLoIo8');



  
  const[TerLoa1,setTerLoa1] = useState('');
  const[TerLoa2,setTerLoa2] = useState('');
  const[TerLoa3,setTerLoa3] = useState('');
  const[TerLoa4,setTerLoa4] = useState('');
  const[TerLoa5,setTerLoa5] = useState('');
  const[TerLoa6,setTerLoa6] = useState('');
  const[TerLoa7,setTerLoa7] = useState('');


  

const sumTerLoa1 = () => {
  try {
   
    const result = eval(`  (${TeLoIo2 || 0} + ${TeLoOtB1 || 0} + ${TeLoIn2 || 0}) `);
    setTerLoa1(result);
  } catch (error) {
    setTerLoa1("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa1();
}, [TeLoIo2,TeLoOtB1,TeLoIn2]);

const sumTerLoa2 = () => {
  try {
   
    const result = eval(`  (${TeLoIo3 || 0} + ${TeLoOtB2 || 0} + ${TeLoIn3 || 0}) `);
    setTerLoa2(result);
  } catch (error) {
    setTerLoa2("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa2();
}, [TeLoIo3,TeLoOtB2,TeLoIn3]); 

const sumTerLoa3 = () => {
  try {
   
    const result = eval(`  (${TeLoIo4 || 0} + ${TeLoOtB3 || 0} + ${TeLoIn4 || 0}) `);
    setTerLoa3(result);
  } catch (error) {
    setTerLoa3("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa3();
}, [TeLoIo4,TeLoOtB3,TeLoIn4]);

const sumTerLoa4 = () => {
  try {
   
    const result = eval(`  (${TeLoIo5 || 0} + ${TeLoOtB4 || 0} + ${TeLoIn5 || 0}) `);
    setTerLoa4(result);
  } catch (error) {
    setTerLoa4("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa4();
}, [TeLoIo5,TeLoOtB4,TeLoIn5]);


const sumTerLoa5 = () => {
  try {
   
    const result = eval(`  (${TeLoIo6 || 0} + ${TeLoOtB5 || 0} + ${TeLoIn6 || 0}) `);
    setTerLoa5(result);
  } catch (error) {
    setTerLoa5("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa5();
}, [TeLoIo6,TeLoOtB5,TeLoIn6]);

const sumTerLoa6 = () => {
  try {
   
    const result = eval(`  (${TeLoIo7 || 0} + ${TeLoOtB6 || 0} + ${TeLoIn7 || 0}) `);
    setTerLoa6(result);
  } catch (error) {
    setTerLoa6("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa6();
}, [TeLoIo7,TeLoOtB6,TeLoIn7]);


const sumTerLoa7 = () => {
  try {
   
    const result = eval(`  (${TeLoIo8 || 0} + ${TeLoOtB7 || 0} + ${TeLoIn8 || 0}) `);
    setTerLoa7(result);
  } catch (error) {
    setTerLoa7("Input all ");  
  }
};

useEffect(() => {
  sumTerLoa7();
}, [TeLoIo8,TeLoOtB7,TeLoIn8]);











  
  const[WheTal1,setWheTal1] = useState('');
  const[WheTal2,setWheTal2] = useState('');
  const[WheTal3,setWheTal3] = useState('');
  const[WheTal4,setWheTal4] = useState('');
  const[WheTal5,setWheTal5] = useState('');
  const[WheTal6,setWheTal6] = useState('');
  const[WheTal7,setWheTal7] = useState('');









  
  const[TotUse1,setTotUse1] = useState('');
  const[TotUse2,setTotUse2] = useState('');
  const[TotUse3,setTotUse3] = useState('');
  const[TotUse4,setTotUse4] = useState('');
  const[TotUse5,setTotUse5] = useState('');
  const[TotUse6,setTotUse6] = useState('');
  const[TotUse7,setTotUse7] = useState('');

  



  
  const[TotSou1,setTotSou1] = useState('');
  const[TotSou2,setTotSou2] = useState('');
  const[TotSou3,setTotSou3] = useState('');
  const[TotSou4,setTotSou4] = useState('');
  const[TotSou5,setTotSou5] = useState('');
  const[TotSou6,setTotSou6] = useState('');
  const[TotSou7,setTotSou7] = useState('');







  
  const[NwcAtEnYr1,setNwcAtEnYr1] = useState('');
  const[NwcAtEnYr2,setNwcAtEnYr2] = useState('');
  const[NwcAtEnYr3,setNwcAtEnYr3] = useState('');
  const[NwcAtEnYr4,setNwcAtEnYr4] = useState('');
  const[NwcAtEnYr5,setNwcAtEnYr5] = useState('');
  const[NwcAtEnYr6,setNwcAtEnYr6] = useState('');
  const[NwcAtEnYr7,setNwcAtEnYr7] = useState('');




  
  const IncDec2= localStorage.getItem('IncDec2');
  const IncDec3= localStorage.getItem('IncDec3');
  const IncDec4= localStorage.getItem('IncDec4');
  const IncDec5= localStorage.getItem('IncDec5');
  const IncDec6= localStorage.getItem('IncDec6');
  const IncDec7= localStorage.getItem('IncDec7');
  const IncDec8= localStorage.getItem('IncDec8');



  
  const NewoCa1= localStorage.getItem('NewoCa1');
  const NewoCa2= localStorage.getItem('NewoCa2');
  const NewoCa3= localStorage.getItem('NewoCa3');
  const NewoCa4= localStorage.getItem('NewoCa4');
  const NewoCa5= localStorage.getItem('NewoCa5');
  const NewoCa6= localStorage.getItem('NewoCa6');
  const NewoCa7= localStorage.getItem('NewoCa7');
  const NewoCa8= localStorage.getItem('NewoCa8');



  


  
  const[ToShoTerSo1,setToShoTerSo1] = useState('');
  const[ToShoTerSo2,setToShoTerSo2] = useState('');
  const[ToShoTerSo3,setToShoTerSo3] = useState('');
  const[ToShoTerSo4,setToShoTerSo4] = useState('');
  const[ToShoTerSo5,setToShoTerSo5] = useState('');
  const[ToShoTerSo6,setToShoTerSo6] = useState('');
  const[ToShoTerSo7,setToShoTerSo7] = useState('');





  
  const[IncOca1,setIncOca1] = useState('');
  const[IncOca2,setIncOca2] = useState('');
  const[IncOca3,setIncOca3] = useState('');
  const[IncOca4,setIncOca4] = useState('');
  const[IncOca5,setIncOca5] = useState('');
  const[IncOca6,setIncOca6] = useState('');
  const[IncOca7,setIncOca7] = useState('');

      




  
  const[IncIRec1,setIncIRec1] = useState('');
  const[IncIRec2,setIncIRec2] = useState('');
  const[IncIRec3,setIncIRec3] = useState('');
  const[IncIRec4,setIncIRec4] = useState('');
  const[IncIRec5,setIncIRec5] = useState('');
  const[IncIRec6,setIncIRec6] = useState('');
  const[IncIRec7,setIncIRec7] = useState('');


  








  
  const[IncInInv1,setIncInInv1] = useState('');
  const[IncInInv2,setIncInInv2] = useState('');
  const[IncInInv3,setIncInInv3] = useState('');
  const[IncInInv4,setIncInInv4] = useState('');
  const[IncInInv5,setIncInInv5] = useState('');
  const[IncInInv6,setIncInInv6] = useState('');
  const[IncInInv7,setIncInInv7] = useState('');






  
  const[DecOcl1,setDecOcl1] = useState('');
  const[DecOcl2,setDecOcl2] = useState('');
  const[DecOcl3,setDecOcl3] = useState('');
  const[DecOcl4,setDecOcl4] = useState('');
  const[DecOcl5,setDecOcl5] = useState('');
  const[DecOcl6,setDecOcl6] = useState('');
  const[DecOcl7,setDecOcl7] = useState('');

      





  
  const[ToShTeSo1,setToShTeSo1] = useState('');
  const[ToShTeSo2,setToShTeSo2] = useState('');
  const[ToShTeSo3,setToShTeSo3] = useState('');
  const[ToShTeSo4,setToShTeSo4] = useState('');
  const[ToShTeSo5,setToShTeSo5] = useState('');
  const[ToShTeSo6,setToShTeSo6] = useState('');
  const[ToShTeSo7,setToShTeSo7] = useState('');

  
  const[DecInSuCr1,setDecInSuCr1] = useState('');
  const[DecInSuCr2,setDecInSuCr2] = useState('');
  const[DecInSuCr3,setDecInSuCr3] = useState('');
  const[DecInSuCr4,setDecInSuCr4] = useState('');
  const[DecInSuCr5,setDecInSuCr5] = useState('');
  const[DecInSuCr6,setDecInSuCr6] = useState('');
  const[DecInSuCr7,setDecInSuCr7] = useState('');






  





  
  const[DecIBaBor1,setDecIBaBor1] = useState('');
  const[DecIBaBor2,setDecIBaBor2] = useState('');
  const[DecIBaBor3,setDecIBaBor3] = useState('');
  const[DecIBaBor4,setDecIBaBor4] = useState('');
  const[DecIBaBor5,setDecIBaBor5] = useState('');
  const[DecIBaBor6,setDecIBaBor6] = useState('');
  const[DecIBaBor7,setDecIBaBor7] = useState('');





  
  const ToOtCuAs1= localStorage.getItem('ToOtCuAs1');
  const ToOtCuAs2= localStorage.getItem('ToOtCuAs2');
  const ToOtCuAs3= localStorage.getItem('ToOtCuAs3');
  const ToOtCuAs4= localStorage.getItem('ToOtCuAs4');
  const ToOtCuAs5= localStorage.getItem('ToOtCuAs5');
  const ToOtCuAs6= localStorage.getItem('ToOtCuAs6');
  const ToOtCuAs7= localStorage.getItem('ToOtCuAs7');
  const ToOtCuAs8= localStorage.getItem('ToOtCuAs8');


  
  const[DeOtCuAs1,setDeOtCuAs1] = useState('');
  const[DeOtCuAs2,setDeOtCuAs2] = useState('');
  const[DeOtCuAs3,setDeOtCuAs3] = useState('');
  const[DeOtCuAs4,setDeOtCuAs4] = useState('');
  const[DeOtCuAs5,setDeOtCuAs5] = useState('');
  const[DeOtCuAs6,setDeOtCuAs6] = useState('');
  const[DeOtCuAs7,setDeOtCuAs7] = useState('');


      
const valDeOtCuAs1 = () => {
  try {

    
    const result =  ({ToOtCuAs2} - {ToOtCuAs1})  < 0 ?  -1 * ({ToOtCuAs2} - {ToOtCuAs1}) : "0";

    setDeOtCuAs1(result);
  } catch (error) {
    setDeOtCuAs1(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs1();
}, [ToOtCuAs2,ToOtCuAs1]);


const valDeOtCuAs2 = () => {
  try {

    
    const result =  ({ToOtCuAs3} - {ToOtCuAs2})  < 0 ?  -1 * ({ToOtCuAs3} - {ToOtCuAs2}) : "0";

    setDeOtCuAs2(result);
  } catch (error) {
    setDeOtCuAs2(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs2();
}, [ToOtCuAs3,ToOtCuAs2]);

const valDeOtCuAs3 = () => {
  try {

    
    const result =  ({ToOtCuAs4} - {ToOtCuAs3})  < 0 ?  -1 * ({ToOtCuAs4} - {ToOtCuAs3}) : "0";

    setDeOtCuAs3(result);
  } catch (error) {
    setDeOtCuAs3(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs3();
}, [ToOtCuAs4,ToOtCuAs3]);

const valDeOtCuAs4 = () => {
  try {

    
    const result =  ({ToOtCuAs5} - {ToOtCuAs4})  < 0 ?  -1 * ({ToOtCuAs5} - {ToOtCuAs4}) : "0";

    setDeOtCuAs4(result);
  } catch (error) {
    setDeOtCuAs4(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs4();
}, [ToOtCuAs5,ToOtCuAs4]);

const valDeOtCuAs5 = () => {
  try {

    
    const result =  ({ToOtCuAs6} - {ToOtCuAs5})  < 0 ?  -1 * ({ToOtCuAs6} - {ToOtCuAs5}) : "0";

    setDeOtCuAs5(result);
  } catch (error) {
    setDeOtCuAs5(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs5();
}, [ToOtCuAs6,ToOtCuAs5]);

const valDeOtCuAs6 = () => {
  try {

    
    const result =  ({ToOtCuAs7} - {ToOtCuAs6})  < 0 ?  -1 * ({ToOtCuAs7} - {ToOtCuAs6}) : "0";

    setDeOtCuAs6(result);
  } catch (error) {
    setDeOtCuAs6(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs6();
}, [ToOtCuAs7,ToOtCuAs6]);

const valDeOtCuAs7 = () => {
  try {

    
    const result =  ({ToOtCuAs8} - {ToOtCuAs7})  < 0 ?  -1 * ({ToOtCuAs8} - {ToOtCuAs7}) : "0";

    setDeOtCuAs7(result);
  } catch (error) {
    setDeOtCuAs7(" "); 
  }
};

useEffect(() => {
  valDeOtCuAs7();
}, [ToOtCuAs8,ToOtCuAs7]);














  
  const TrDeb1= localStorage.getItem('TrDeb1');
  const TrDeb2= localStorage.getItem('TrDeb2');
  const TrDeb3= localStorage.getItem('TrDeb3');
  const TrDeb4= localStorage.getItem('TrDeb4');
  const TrDeb5= localStorage.getItem('TrDeb5');
  const TrDeb6= localStorage.getItem('TrDeb6');
  const TrDeb7= localStorage.getItem('TrDeb7');
  const TrDeb8= localStorage.getItem('TrDeb8');

  
  const[DecIRec1,setDecIRec1] = useState('');
  const[DecIRec2,setDecIRec2] = useState('');
  const[DecIRec3,setDecIRec3] = useState('');
  const[DecIRec4,setDecIRec4] = useState('');
  const[DecIRec5,setDecIRec5] = useState('');
  const[DecIRec6,setDecIRec6] = useState('');
  const[DecIRec7,setDecIRec7] = useState('');


      
const valDecIRec1 = () => {
  try {

    
    const result =  ({TrDeb2} - {TrDeb1})  < 0 ? -1*  ({TrDeb2} - {TrDeb1}) : "0";

    setDecIRec1(result);
  } catch (error) {
    setDecIRec1(" "); 
  }
};

useEffect(() => {
  valDecIRec1();
}, [TrDeb2,TrDeb1]);

const valDecIRec2 = () => {
  try {

    
    const result =  ({TrDeb3} - {TrDeb2})  < 0 ? -1*  ({TrDeb3} - {TrDeb2}) : "0";

    setDecIRec2(result);
  } catch (error) {
    setDecIRec2(" "); 
  }
};

useEffect(() => {
  valDecIRec2();
}, [TrDeb3,TrDeb2]);

const valDecIRec3 = () => {
  try {

    
    const result =  ({TrDeb4} - {TrDeb3})  < 0 ? -1*  ({TrDeb4} - {TrDeb3}) : "0";

    setDecIRec3(result);
  } catch (error) {
    setDecIRec3(" "); 
  }
};

useEffect(() => {
  valDecIRec3();
}, [TrDeb4,TrDeb3]);

const valDecIRec4 = () => {
  try {

    
    const result =  ({TrDeb5} - {TrDeb4})  < 0 ? -1*  ({TrDeb5} - {TrDeb4}) : "0";

    setDecIRec4(result);
  } catch (error) {
    setDecIRec4(" "); 
  }
};

useEffect(() => {
  valDecIRec4();
}, [TrDeb5,TrDeb4]);

const valDecIRec5 = () => {
  try {

    
    const result =  ({TrDeb6} - {TrDeb5})  < 0 ? -1*  ({TrDeb6} - {TrDeb5}) : "0";

    setDecIRec5(result);
  } catch (error) {
    setDecIRec5(" "); 
  }
};

useEffect(() => {
  valDecIRec5();
}, [TrDeb6,TrDeb5]);

const valDecIRec6 = () => {
  try {

    
    const result =  ({TrDeb7} - {TrDeb6})  < 0 ? -1*  ({TrDeb7} - {TrDeb6}) : "0";

    setDecIRec6(result);
  } catch (error) {
    setDecIRec6(" "); 
  }
};

useEffect(() => {
  valDecIRec6();
}, [TrDeb7,TrDeb6]);

const valDecIRec7 = () => {
  try {

    
    const result =  ({TrDeb8} - {TrDeb7})  < 0 ? -1*  ({TrDeb8} - {TrDeb7}) : "0";

    setDecIRec7(result);
  } catch (error) {
    setDecIRec7(" "); 
  }
};

useEffect(() => {
  valDecIRec7();
}, [TrDeb8,TrDeb7]);






  
  const TotInv1= localStorage.getItem('TotInv1');
  const TotInv2= localStorage.getItem('TotInv2');
  const TotInv3= localStorage.getItem('TotInv3');
  const TotInv4= localStorage.getItem('TotInv4');
  const TotInv5= localStorage.getItem('TotInv5');
  const TotInv6= localStorage.getItem('TotInv6');
  const TotInv7= localStorage.getItem('TotInv7');
  const TotInv8= localStorage.getItem('TotInv8');


  
  const[IncIOtCurLia1,setIncIOtCurLia1] = useState('');
  const[IncIOtCurLia2,setIncIOtCurLia2] = useState('');
  const[IncIOtCurLia3,setIncIOtCurLia3] = useState('');
  const[IncIOtCurLia4,setIncIOtCurLia4] = useState('');
  const[IncIOtCurLia5,setIncIOtCurLia5] = useState('');
  const[IncIOtCurLia6,setIncIOtCurLia6] = useState('');
  const[IncIOtCurLia7,setIncIOtCurLia7] = useState('');


  
  const[DecIInven1,setDecIInven1] = useState('');
  const[DecIInven2,setDecIInven2] = useState('');
  const[DecIInven3,setDecIInven3] = useState('');
  const[DecIInven4,setDecIInven4] = useState('');
  const[DecIInven5,setDecIInven5] = useState('');
  const[DecIInven6,setDecIInven6] = useState('');
  const[DecIInven7,setDecIInven7] = useState('');


      
const valDecIInven1 = () => {
  try {

    
    const result =  ({TotInv2} - {TotInv1})  < 0 ? -1* ({TotInv2} - {TotInv1}) : "0";

    setDecIInven1(result);
  } catch (error) {
    setDecIInven1(" "); 
  }
};

useEffect(() => {
  valDecIInven1();
}, [TotInv2,TotInv1]);

     
const valDecIInven2 = () => {
  try {

    
    const result =  ({TotInv3} - {TotInv2})  < 0 ? -1* ({TotInv3} - {TotInv2}) : "0";

    setDecIInven2(result);
  } catch (error) {
    setDecIInven2(" "); 
  }
};

useEffect(() => {
  valDecIInven2();
}, [TotInv3,TotInv2]);

     
const valDecIInven3 = () => {
  try {

    
    const result =  ({TotInv4} - {TotInv3})  < 0 ? -1* ({TotInv4} - {TotInv3}) : "0";

    setDecIInven3(result);
  } catch (error) {
    setDecIInven3(" "); 
  }
};

useEffect(() => {
  valDecIInven3();
}, [TotInv4,TotInv3]);

     
const valDecIInven4 = () => {
  try {

    
    const result =  ({TotInv5} - {TotInv4})  < 0 ? -1* ({TotInv5} - {TotInv4}) : "0";

    setDecIInven4(result);
  } catch (error) {
    setDecIInven4(" "); 
  }
};

useEffect(() => {
  valDecIInven4();
}, [TotInv5,TotInv4]);


     
const valDecIInven5 = () => {
  try {

    
    const result =  ({TotInv6} - {TotInv5})  < 0 ? -1* ({TotInv6} - {TotInv5}) : "0";

    setDecIInven5(result);
  } catch (error) {
    setDecIInven5(" "); 
  }
};

useEffect(() => {
  valDecIInven5();
}, [TotInv6,TotInv5]);


     
const valDecIInven6 = () => {
  try {

    
    const result =  ({TotInv7} - {TotInv6})  < 0 ? -1* ({TotInv7} - {TotInv6}) : "0";

    setDecIInven6(result);
  } catch (error) {
    setDecIInven6(" "); 
  }
};

useEffect(() => {
  valDecIInven6();
}, [TotInv7,TotInv6]);


     
const valDecIInven7 = () => {
  try {

    
    const result =  ({TotInv8} - {TotInv7})  < 0 ? -1* ({TotInv8} - {TotInv7}) : "0";

    setDecIInven7(result);
  } catch (error) {
    setDecIInven7(" "); 
  }
};

useEffect(() => {
  valDecIInven7();
}, [TotInv8,TotInv7]);







  
  
  








  
  const[IncInSuCr1,setIncInSuCr1] = useState('');
  const[IncInSuCr2,setIncInSuCr2] = useState('');
  const[IncInSuCr3,setIncInSuCr3] = useState('');
  const[IncInSuCr4,setIncInSuCr4] = useState('');
  const[IncInSuCr5,setIncInSuCr5] = useState('');
  const[IncInSuCr6,setIncInSuCr6] = useState('');
  const[IncInSuCr7,setIncInSuCr7] = useState('');


  


  
  const[LoTeUsLoSo1,setLoTeUsLoSo1] = useState('');
  const[LoTeUsLoSo2,setLoTeUsLoSo2] = useState('');
  const[LoTeUsLoSo3,setLoTeUsLoSo3] = useState('');
  const[LoTeUsLoSo4,setLoTeUsLoSo4] = useState('');
  const[LoTeUsLoSo5,setLoTeUsLoSo5] = useState('');
  const[LoTeUsLoSo6,setLoTeUsLoSo6] = useState('');
  const[LoTeUsLoSo7,setLoTeUsLoSo7] = useState('');

  
  const[IncBanBor1,setIncBanBor1] = useState('');
  const[IncBanBor2,setIncBanBor2] = useState('');
  const[IncBanBor3,setIncBanBor3] = useState('');
  const[IncBanBor4,setIncBanBor4] = useState('');
  const[IncBanBor5,setIncBanBor5] = useState('');
  const[IncBanBor6,setIncBanBor6] = useState('');
  const[IncBanBor7,setIncBanBor7] = useState('');







  
  const[SurDefi1,setSurDefi1] = useState('');
  const[SurDefi2,setSurDefi2] = useState('');
  const[SurDefi3,setSurDefi3] = useState('');
  const[SurDefi4,setSurDefi4] = useState('');
  const[SurDefi5,setSurDefi5] = useState('');
  const[SurDefi6,setSurDefi6] = useState('');
  const[SurDefi7,setSurDefi7] = useState('');



  
  const[IncDecBaBow1,setIncDecBaBow1] = useState('');
  const[IncDecBaBow2,setIncDecBaBow2] = useState('');
  const[IncDecBaBow3,setIncDecBaBow3] = useState('');
  const[IncDecBaBow4,setIncDecBaBow4] = useState('');
  const[IncDecBaBow5,setIncDecBaBow5] = useState('');
  const[IncDecBaBow6,setIncDecBaBow6] = useState('');
  const[IncDecBaBow7,setIncDecBaBow7] = useState('');


  








  
  const WcFrBI1= localStorage.getItem('WcFrBI1');
  const WcFrBI2= localStorage.getItem('WcFrBI2');
  const WcFrBI3= localStorage.getItem('WcFrBI3');
  const WcFrBI4= localStorage.getItem('WcFrBI4');
  const WcFrBI5= localStorage.getItem('WcFrBI5');
  const WcFrBI6= localStorage.getItem('WcFrBI6');
  const WcFrBI7= localStorage.getItem('WcFrBI7');
  const WcFrBI8= localStorage.getItem('WcFrBI8');


    
  const wcBrIob1= localStorage.getItem('wcBrIob1');
  const wcBrIob2= localStorage.getItem('wcBrIob2');
  const wcBrIob3= localStorage.getItem('wcBrIob3');
  const wcBrIob4= localStorage.getItem('wcBrIob4');
  const wcBrIob5= localStorage.getItem('wcBrIob5');
  const wcBrIob6= localStorage.getItem('wcBrIob6');
  const wcBrIob7= localStorage.getItem('wcBrIob7');
  const wcBrIob8= localStorage.getItem('wcBrIob8');


  
  const[NeSurDef1,setNeSurDef1] = useState('');
  const[NeSurDef2,setNeSurDef2] = useState('');
  const[NeSurDef3,setNeSurDef3] = useState('');
  const[NeSurDef4,setNeSurDef4] = useState('');
  const[NeSurDef5,setNeSurDef5] = useState('');
  const[NeSurDef6,setNeSurDef6] = useState('');
  const[NeSurDef7,setNeSurDef7] = useState('');

  







  
  const[IncDecWC1,setIncDecWC1] = useState('');
  const[IncDecWC2,setIncDecWC2] = useState('');
  const[IncDecWC3,setIncDecWC3] = useState('');
  const[IncDecWC4,setIncDecWC4] = useState('');
  const[IncDecWC5,setIncDecWC5] = useState('');
  const[IncDecWC6,setIncDecWC6] = useState('');
  const[IncDecWC7,setIncDecWC7] = useState('');


  



  
  const OtCuLi1= localStorage.getItem('OtCuLi1');
  const OtCuLi2= localStorage.getItem('OtCuLi2');
  const OtCuLi3= localStorage.getItem('OtCuLi3');
  const OtCuLi4= localStorage.getItem('OtCuLi4');
  const OtCuLi5= localStorage.getItem('OtCuLi5');
  const OtCuLi6= localStorage.getItem('OtCuLi6');
  const OtCuLi7= localStorage.getItem('OtCuLi7');
  const OtCuLi8= localStorage.getItem('OtCuLi8');


  
  const SunCrTr1= localStorage.getItem('SunCrTr1');
  const SunCrTr2= localStorage.getItem('SunCrTr2');
  const SunCrTr3= localStorage.getItem('SunCrTr3');
  const SunCrTr4= localStorage.getItem('SunCrTr4');
  const SunCrTr5= localStorage.getItem('SunCrTr5');
  const SunCrTr6= localStorage.getItem('SunCrTr6');
  const SunCrTr7= localStorage.getItem('SunCrTr7');
  const SunCrTr8= localStorage.getItem('SunCrTr8');



  
  const[IncDecCl1,setIncDecCl1] = useState('');
  const[IncDecCl2,setIncDecCl2] = useState('');
  const[IncDecCl3,setIncDecCl3] = useState('');
  const[IncDecCl4,setIncDecCl4] = useState('');
  const[IncDecCl5,setIncDecCl5] = useState('');
  const[IncDecCl6,setIncDecCl6] = useState('');
  const[IncDecCl7,setIncDecCl7] = useState('');

  

const sumIncDecCl1 = () => {
  try {
   
    const result = eval(`  (${SunCrTr2 || 0} + ${OtCuLi2 || 0}) -  (${SunCrTr1 || 0} + ${OtCuLi1 || 0})`);
    setIncDecCl1(result);
  } catch (error) {
    setIncDecCl1("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl1();
}, [SunCrTr2,SunCrTr1,OtCuLi2,OtCuLi1]);

const sumIncDecCl2 = () => {
  try {
   
    const result = eval(`  (${SunCrTr3 || 0} + ${OtCuLi3 || 0}) -  (${SunCrTr2 || 0} + ${OtCuLi2 || 0})`);
    setIncDecCl2(result);
  } catch (error) {
    setIncDecCl2("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl2();
}, [SunCrTr3,SunCrTr2,OtCuLi3,OtCuLi2]);

const sumIncDecCl3 = () => {
  try {
   
    const result = eval(`  (${SunCrTr4 || 0} + ${OtCuLi4 || 0}) -  (${SunCrTr3 || 0} + ${OtCuLi3 || 0})`);
    setIncDecCl3(result);
  } catch (error) {
    setIncDecCl3("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl3();
}, [SunCrTr4,SunCrTr3,OtCuLi4,OtCuLi3]);


const sumIncDecCl4 = () => {
  try {
   
    const result = eval(`  (${SunCrTr5 || 0} + ${OtCuLi5 || 0}) -  (${SunCrTr4 || 0} + ${OtCuLi4 || 0})`);
    setIncDecCl4(result);
  } catch (error) {
    setIncDecCl4("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl4();
}, [SunCrTr5,SunCrTr4,OtCuLi5,OtCuLi4]);

const sumIncDecCl5 = () => {
  try {
   
    const result = eval(`  (${SunCrTr6 || 0} + ${OtCuLi6 || 0}) -  (${SunCrTr5 || 0} + ${OtCuLi5 || 0})`);
    setIncDecCl5(result);
  } catch (error) {
    setIncDecCl5("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl5();
}, [SunCrTr6,SunCrTr5,OtCuLi6,OtCuLi5]);
const sumIncDecCl6 = () => {
  try {
   
    const result = eval(`  (${SunCrTr7 || 0} + ${OtCuLi7 || 0}) -  (${SunCrTr6 || 0} + ${OtCuLi6 || 0})`);
    setIncDecCl6(result);
  } catch (error) {
    setIncDecCl6("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl6();
}, [SunCrTr7,SunCrTr6,OtCuLi7,OtCuLi6]);


const sumIncDecCl7 = () => {
  try {
   
    const result = eval(`  (${SunCrTr8 || 0} + ${OtCuLi8 || 0}) -  (${SunCrTr7 || 0} + ${OtCuLi7 || 0})`);
    setIncDecCl7(result);
  } catch (error) {
    setIncDecCl7("Input all ");  
  }
};

useEffect(() => {
  sumIncDecCl7();
}, [SunCrTr8,SunCrTr7,OtCuLi8,OtCuLi7]);






  
  const ToCuAs1= localStorage.getItem('ToCuAs1');
  const ToCuAs2= localStorage.getItem('ToCuAs2');
  const ToCuAs3= localStorage.getItem('ToCuAs3');
  const ToCuAs4= localStorage.getItem('ToCuAs4');
  const ToCuAs5= localStorage.getItem('ToCuAs5');
  const ToCuAs6= localStorage.getItem('ToCuAs6');
  const ToCuAs7= localStorage.getItem('ToCuAs7');
  const ToCuAs8= localStorage.getItem('ToCuAs8');

  
  const[IncDecCA1,setIncDecCA1] = useState('');
  const[IncDecCA2,setIncDecCA2] = useState('');
  const[IncDecCA3,setIncDecCA3] = useState('');
  const[IncDecCA4,setIncDecCA4] = useState('');
  const[IncDecCA5,setIncDecCA5] = useState('');
  const[IncDecCA6,setIncDecCA6] = useState('');
  const[IncDecCA7,setIncDecCA7] = useState('');


  

  const sumIncDecCA1 = () => {
    try {
     
      const result = eval(`  (${ToCuAs2 || 0} - ${ToCuAs1 || 0}) `);
      setIncDecCA1(result);
    } catch (error) {
      setIncDecCA1("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA1();
  }, [ToCuAs2,ToCuAs1]);
  
  
  const sumIncDecCA2 = () => {
    try {
     
      const result = eval(`  (${ToCuAs3 || 0} - ${ToCuAs2 || 0}) `);
      setIncDecCA2(result);
    } catch (error) {
      setIncDecCA2("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA2();
  }, [ToCuAs3,ToCuAs2]);
  
  
  const sumIncDecCA3 = () => {
    try {
     
      const result = eval(`  (${ToCuAs4 || 0} - ${ToCuAs3 || 0}) `);
      setIncDecCA3(result);
    } catch (error) {
      setIncDecCA3("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA3();
  }, [ToCuAs4,ToCuAs3]);
  
  
  
  const sumIncDecCA4 = () => {
    try {
     
      const result = eval(`  (${ToCuAs5 || 0} - ${ToCuAs4 || 0}) `);
      setIncDecCA4(result);
    } catch (error) {
      setIncDecCA4("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA4();
  }, [ToCuAs5,ToCuAs4]);
  
  
  
  const sumIncDecCA5 = () => {
    try {
     
      const result = eval(`  (${ToCuAs6 || 0} - ${ToCuAs5 || 0}) `);
      setIncDecCA5(result);
    } catch (error) {
      setIncDecCA5("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA5();
  }, [ToCuAs6,ToCuAs5]);
  
  
  const sumIncDecCA6 = () => {
    try {
     
      const result = eval(`  (${ToCuAs7 || 0} - ${ToCuAs6 || 0}) `);
      setIncDecCA6(result);
    } catch (error) {
      setIncDecCA6("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA6();
  }, [ToCuAs7,ToCuAs6]);
  
  
  const sumIncDecCA7 = () => {
    try {
     
      const result = eval(`  (${ToCuAs8 || 0} - ${ToCuAs7 || 0}) `);
      setIncDecCA7(result);
    } catch (error) {
      setIncDecCA7("Input all ");  
    }
  };
  
  useEffect(() => {
    sumIncDecCA7();
  }, [ToCuAs8,ToCuAs7]);
  















  

  const[ToLoTeUse1,setToLoTeUse1] = useState('');
  const[ToLoTeUse2,setToLoTeUse2] = useState('');
  const[ToLoTeUse3,setToLoTeUse3] = useState('');
  const[ToLoTeUse4,setToLoTeUse4] = useState('');
  const[ToLoTeUse5,setToLoTeUse5] = useState('');
  const[ToLoTeUse6,setToLoTeUse6] = useState('');
  const[ToLoTeUse7,setToLoTeUse7] = useState('');


  
  const[LoTeSurDe1,setLoTeSurDe1] = useState('');
  const[LoTeSurDe2,setLoTeSurDe2] = useState('');
  const[LoTeSurDe3,setLoTeSurDe3] = useState('');
  const[LoTeSurDe4,setLoTeSurDe4] = useState('');
  const[LoTeSurDe5,setLoTeSurDe5] = useState('');
  const[LoTeSurDe6,setLoTeSurDe6] = useState('');
  const[LoTeSurDe7,setLoTeSurDe7] = useState('');



  




  
  
  const divDra2= localStorage.getItem('divDra2');
  const divDra3= localStorage.getItem('divDra3');
  const divDra4= localStorage.getItem('divDra4');
  const divDra5= localStorage.getItem('divDra5');
  const divDra6= localStorage.getItem('divDra6');
  const divDra7= localStorage.getItem('divDra7');
  const divDra8= localStorage.getItem('divDra8');



  
  const[DecInOtl1,setDecInOtl1] = useState('');
  const[DecInOtl2,setDecInOtl2] = useState('');
  const[DecInOtl3,setDecInOtl3] = useState('');
  const[DecInOtl4,setDecInOtl4] = useState('');
  const[DecInOtl5,setDecInOtl5] = useState('');
  const[DecInOtl6,setDecInOtl6] = useState('');
  const[DecInOtl7,setDecInOtl7] = useState('');


  









  
  const[DeciTerLo1,setDeciTerLo1] = useState('');
  const[DeciTerLo2,setDeciTerLo2] = useState('');
  const[DeciTerLo3,setDeciTerLo3] = useState('');
  const[DeciTerLo4,setDeciTerLo4] = useState('');
  const[DeciTerLo5,setDeciTerLo5] = useState('');
  const[DeciTerLo6,setDeciTerLo6] = useState('');
  const[DeciTerLo7,setDeciTerLo7] = useState('');


  
  
 
  const[IncintAss1,setIncintAss1] = useState('');
  const[IncintAss2,setIncintAss2] = useState('');
  const[IncintAss3,setIncintAss3] = useState('');
  const[IncintAss4,setIncintAss4] = useState('');
  const[IncintAss5,setIncintAss5] = useState('');
  const[IncintAss6,setIncintAss6] = useState('');
  const[IncintAss7,setIncintAss7] = useState('');







  
  const[IniNoCuAss1,setIniNoCuAss1] = useState('');
  const[IniNoCuAss2,setIniNoCuAss2] = useState('');
  const[IniNoCuAss3,setIniNoCuAss3] = useState('');
  const[IniNoCuAss4,setIniNoCuAss4] = useState('');
  const[IniNoCuAss5,setIniNoCuAss5] = useState('');
  const[IniNoCuAss6,setIniNoCuAss6] = useState('');
  const[IniNoCuAss7,setIniNoCuAss7] = useState('');







  
  const[IninFiAss1,setIninFiAss1] = useState('');
  const[IninFiAss2,setIninFiAss2] = useState('');
  const[IninFiAss3,setIninFiAss3] = useState('');
  const[IninFiAss4,setIninFiAss4] = useState('');
  const[IninFiAss5,setIninFiAss5] = useState('');
  const[IninFiAss6,setIninFiAss6] = useState('');
  const[IninFiAss7,setIninFiAss7] = useState('');









  



  
  const[ToLoteSo1,setToLoteSo1] = useState('');
  const[ToLoteSo2,setToLoteSo2] = useState('');
  const[ToLoteSo3,setToLoteSo3] = useState('');
  const[ToLoteSo4,setToLoteSo4] = useState('');
  const[ToLoteSo5,setToLoteSo5] = useState('');
  const[ToLoteSo6,setToLoteSo6] = useState('');
  const[ToLoteSo7,setToLoteSo7] = useState('');

  

  const[NetLoss1,setNetLoss1] = useState('');
  const[NetLoss2,setNetLoss2] = useState('');
  const[NetLoss3,setNetLoss3] = useState('');
  const[NetLoss4,setNetLoss4] = useState('');
  const[NetLoss5,setNetLoss5] = useState('');
  const[NetLoss6,setNetLoss6] = useState('');
  const[NetLoss7,setNetLoss7] = useState('');








  
  



  

 

  
  


  
  const ToIa1= localStorage.getItem('ToIa1');
  const ToIa2= localStorage.getItem('ToIa2');
  const ToIa3= localStorage.getItem('ToIa3');
  const ToIa4= localStorage.getItem('ToIa4');
  const ToIa5= localStorage.getItem('ToIa5');
  const ToIa6= localStorage.getItem('ToIa6');
  const ToIa7= localStorage.getItem('ToIa7');
  const ToIa8= localStorage.getItem('ToIa8');
  
  const[DeInAs1,setDeInAs1] = useState('');
  const[DeInAs2,setDeInAs2] = useState('');
  const[DeInAs3,setDeInAs3] = useState('');
  const[DeInAs4,setDeInAs4] = useState('');
  const[DeInAs5,setDeInAs5] = useState('');
  const[DeInAs6,setDeInAs6] = useState('');
  const[DeInAs7,setDeInAs7] = useState('');
  const[DeInAs8,setDeInAs8] = useState('');



  
const valDeInAs1 = () => {
  try {

    
    const result =  ({ToIa1} - {ToIa2})  > 0 ?  ({ToIa1} - {ToIa2}) : "0";

    setDeInAs1(result);
  } catch (error) {
    setDeInAs1(" "); 
  }
};

useEffect(() => {
  valDeInAs1();
}, [ToIa1,ToIa2]);

  
const valDeInAs2 = () => {
  try {

    
    const result =  ({ToIa2} - {ToIa3})  > 0 ?  ({ToIa2} - {ToIa3}) : "0";

    setDeInAs2(result);
  } catch (error) {
    setDeInAs2(" "); 
  }
};

useEffect(() => {
  valDeInAs2();
}, [ToIa2,ToIa3]);


  
const valDeInAs3 = () => {
  try {

    
    const result =  ({ToIa3} - {ToIa4})  > 0 ?  ({ToIa3} - {ToIa4}) : "0";

    setDeInAs3(result);
  } catch (error) {
    setDeInAs3(" "); 
  }
};

useEffect(() => {
  valDeInAs3();
}, [ToIa3,ToIa4]);

  
const valDeInAs4 = () => {
  try {

    
    const result =  ({ToIa4} - {ToIa5})  > 0 ?  ({ToIa4} - {ToIa5}) : "0";

    setDeInAs4(result);
  } catch (error) {
    setDeInAs4(" "); 
  }
};

useEffect(() => {
  valDeInAs4();
}, [ToIa4,ToIa5]);

  
const valDeInAs5 = () => {
  try {

    
    const result =  ({ToIa5} - {ToIa6})  > 0 ?  ({ToIa5} - {ToIa6}) : "0";

    setDeInAs5(result);
  } catch (error) {
    setDeInAs5(" "); 
  }
};

useEffect(() => {
  valDeInAs5();
}, [ToIa5,ToIa6]);

  
const valDeInAs6 = () => {
  try {

    
    const result =  ({ToIa6} - {ToIa7})  > 0 ?  ({ToIa6} - {ToIa7}) : "0";

    setDeInAs6(result);
  } catch (error) {
    setDeInAs6(" "); 
  }
};

useEffect(() => {
  valDeInAs6();
}, [ToIa6,ToIa7]);


  
const valDeInAs7 = () => {
  try {

    
    const result =  ({ToIa7} - {ToIa8})  > 0 ?  ({ToIa7} - {ToIa8}) : "0";

    setDeInAs7(result);
  } catch (error) {
    setDeInAs7(" "); 
  }
};

useEffect(() => {
  valDeInAs7();
}, [ToIa7,ToIa8]);
















  
  const ToNca1= localStorage.getItem('ToNca1');
  const ToNca2= localStorage.getItem('ToNca1');
  const ToNca3= localStorage.getItem('ToNca1');
  const ToNca4= localStorage.getItem('ToNca1');
  const ToNca5= localStorage.getItem('ToNca1');
  const ToNca6= localStorage.getItem('ToNca1');
  const ToNca7= localStorage.getItem('ToNca1');
  const ToNca8= localStorage.getItem('ToNca1');



  
  const[DeINoCuAs1,setDeINoCuAs1] = useState('');
  const[DeINoCuAs2,setDeINoCuAs2] = useState('');
  const[DeINoCuAs3,setDeINoCuAs3] = useState('');
  const[DeINoCuAs4,setDeINoCuAs4] = useState('');
  const[DeINoCuAs5,setDeINoCuAs5] = useState('');
  const[DeINoCuAs6,setDeINoCuAs6] = useState('');
  const[DeINoCuAs7,setDeINoCuAs7] = useState('');


  const valDeINoCuAs1 = () => {
    try {

      const result =  ({ToNca1} - {ToNca2})  > 0 ?  ({ToNca1} - {ToNca2}) : "0";

      setDeINoCuAs1(result);
    } catch (error) {
      setDeINoCuAs1(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs1();
  }, [ToNca1,ToNca2]);

  const valDeINoCuAs2 = () => {
    try {
          
      const result =  ({ToNca2} - {ToNca3})  > 0 ?  ({ToNca2} - {ToNca3}) : "0";

      setDeINoCuAs2(result);
    } catch (error) {
      setDeINoCuAs2(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs2();
  }, [ToNca2,ToNca3]);

  const valDeINoCuAs3 = () => {
    try {
          
      const result =  ({ToNca3} - {ToNca4})  > 0 ?  ({ToNca3} - {ToNca4}) : "0";

      setDeINoCuAs3(result);
    } catch (error) {
      setDeINoCuAs3(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs3();
  }, [ToNca3,ToNca4]);

  const valDeINoCuAs4 = () => {
    try {
          
      const result =  ({ToNca4} - {ToNca5})  > 0 ?  ({ToNca4} - {ToNca5}) : "0";

      setDeINoCuAs4(result);
    } catch (error) {
      setDeINoCuAs4(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs4();
  }, [ToNca4,ToNca5]);

  const valDeINoCuAs5 = () => {
    try {
          
      const result =  ({ToNca5} - {ToNca6})  > 0 ?  ({ToNca5} - {ToNca6}) : "0";

      setDeINoCuAs5(result);
    } catch (error) {
      setDeINoCuAs5(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs5();
  }, [ToNca5,ToNca6]);

  const valDeINoCuAs6 = () => {
    try {
          
      const result =  ({ToNca6} - {ToNca7})  > 0 ?  ({ToNca6} - {ToNca7}) : "0";

      setDeINoCuAs6(result);
    } catch (error) {
      setDeINoCuAs6(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs6();
  }, [ToNca6,ToNca7]);

  const valDeINoCuAs7 = () => {
    try {
          
      const result =  ({ToNca7} - {ToNca8})  > 0 ?  ({ToNca7} - {ToNca8}) : "0";

      setDeINoCuAs7(result);
    } catch (error) {
      setDeINoCuAs7(" "); 
    }
  };
  
  useEffect(() => {
    valDeINoCuAs7();
  }, [ToNca7,ToNca8]);










  






  


  
  const GroBlo1= localStorage.getItem('GroBlo1');
  const GroBlo2= localStorage.getItem('GroBlo2');
  const GroBlo3= localStorage.getItem('GroBlo3');
  const GroBlo4= localStorage.getItem('GroBlo4');
  const GroBlo5= localStorage.getItem('GroBlo5');
  const GroBlo6= localStorage.getItem('GroBlo6');
  const GroBlo7= localStorage.getItem('GroBlo7');
  const GroBlo8= localStorage.getItem('GroBlo8');



  
  const[DeIFiAs1,setDeIFiAs1] = useState('');
  const[DeIFiAs2,setDeIFiAs2] = useState('');
  const[DeIFiAs3,setDeIFiAs3] = useState('');
  const[DeIFiAs4,setDeIFiAs4] = useState('');
  const[DeIFiAs5,setDeIFiAs5] = useState('');
  const[DeIFiAs6,setDeIFiAs6] = useState('');
  const[DeIFiAs7,setDeIFiAs7] = useState('');

  const valDeIFiAs1 = () => {
    try {
  
      
      const result =  ({GroBlo1} - {GroBlo2})  > 0 ?  ({GroBlo1} - {GroBlo2}) : "0";
      setDeIFiAs1(result);
    } catch (error) {
      setDeIFiAs1(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs1();
  }, [GroBlo1, GroBlo2 ]);

  const valDeIFiAs2 = () => {
    try {
  
      
      const result =  ({GroBlo2} - {GroBlo3})  > 0 ?  ({GroBlo2} - {GroBlo3}) : "0";
      setDeIFiAs2(result);
    } catch (error) {
      setDeIFiAs2(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs2();
  }, [GroBlo2, GroBlo3 ]);

  const valDeIFiAs3 = () => {
    try {
  
      
      const result =  ({GroBlo3} - {GroBlo4})  > 0 ?  ({GroBlo3} - {GroBlo4}) : "0";
      setDeIFiAs3(result);
    } catch (error) {
      setDeIFiAs3(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs3();
  }, [GroBlo3, GroBlo4 ]);

  const valDeIFiAs4 = () => {
    try {
  
      
      const result =  ({GroBlo4} - {GroBlo5})  > 0 ?  ({GroBlo4} - {GroBlo5}) : "0";
      setDeIFiAs4(result);
    } catch (error) {
      setDeIFiAs4(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs4();
  }, [GroBlo4, GroBlo5 ]);


  const valDeIFiAs5 = () => {
    try {
  
      
      const result =  ({GroBlo5} - {GroBlo6})  > 0 ?  ({GroBlo5} - {GroBlo6}) : "0";
      setDeIFiAs5(result);
    } catch (error) {
      setDeIFiAs5(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs5();
  }, [GroBlo5, GroBlo6 ]);


  const valDeIFiAs6 = () => {
    try {
  
      
      const result =  ({GroBlo6} - {GroBlo7})  > 0 ?  ({GroBlo6} - {GroBlo7}) : "0";
      setDeIFiAs6(result);
    } catch (error) {
      setDeIFiAs6(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs6();
  }, [GroBlo6, GroBlo7 ]);

  const valDeIFiAs7 = () => {
    try {
  
      
      const result =  ({GroBlo7} - {GroBlo8})  > 0 ?  ({GroBlo7} - {GroBlo8}) : "0";
      setDeIFiAs7(result);
    } catch (error) {
      setDeIFiAs7(" "); 
    }
  };
  
  useEffect(() => {
    valDeIFiAs7();
  }, [GroBlo7, GroBlo8 ]);



  
  const sumToLoTeUse1 = () => {
    try {
     
      const result = eval(`  (${NetLoss1 || 0} + ${IninFiAss1 || 0} + ${IniNoCuAss1 || 0} + ${IncintAss1 || 0}
      + ${DeciTerLo1 || 0} + ${DecInOtl1 || 0} + ${divDra2 || 0} `);
      setToLoTeUse1(result);
    } catch (error) {
      setToLoTeUse1("Input all ");  
    }
  };
  
useEffect(() => {
  sumToLoTeUse1();
}, [NetLoss1, IninFiAss1, IniNoCuAss1, IncintAss1, DeciTerLo1, DecInOtl1, divDra2]);

const sumToLoTeUse2 = () => {
  try {
   
    const result = eval(`  (${NetLoss2 || 0} + ${IninFiAss2 || 0} + ${IniNoCuAss2 || 0} + ${IncintAss2 || 0}
    + ${DeciTerLo2 || 0} + ${DecInOtl2 || 0} + ${divDra3 || 0} `);
    setToLoTeUse2(result);
  } catch (error) {
    setToLoTeUse2("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse2();
}, [NetLoss2, IninFiAss2, IniNoCuAss2, IncintAss2, DeciTerLo2, DecInOtl2, divDra3]);

const sumToLoTeUse3 = () => {
  try {
   
    const result = eval(`  (${NetLoss3 || 0} + ${IninFiAss3 || 0} + ${IniNoCuAss3 || 0} + ${IncintAss3 || 0}
    + ${DeciTerLo3 || 0} + ${DecInOtl3 || 0} + ${divDra4 || 0} `);
    setToLoTeUse3(result);
  } catch (error) {
    setToLoTeUse3("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse3();
}, [NetLoss3, IninFiAss3, IniNoCuAss3, IncintAss3, DeciTerLo3, DecInOtl3, divDra4]);


const sumToLoTeUse4 = () => {
  try {
   
    const result = eval(`  (${NetLoss4 || 0} + ${IninFiAss4 || 0} + ${IniNoCuAss4 || 0} + ${IncintAss4 || 0}
    + ${DeciTerLo4 || 0} + ${DecInOtl4 || 0} + ${divDra5 || 0} `);
    setToLoTeUse4(result);
  } catch (error) {
    setToLoTeUse4("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse4();
}, [NetLoss4, IninFiAss4, IniNoCuAss4, IncintAss4, DeciTerLo4, DecInOtl4, divDra5]);


const sumToLoTeUse5 = () => {
  try {
   
    const result = eval(`  (${NetLoss5 || 0} + ${IninFiAss5 || 0} + ${IniNoCuAss5 || 0} + ${IncintAss5 || 0}
    + ${DeciTerLo5 || 0} + ${DecInOtl5 || 0} + ${divDra6 || 0} `);
    setToLoTeUse5(result);
  } catch (error) {
    setToLoTeUse5("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse5();
}, [NetLoss5, IninFiAss5, IniNoCuAss5, IncintAss5, DeciTerLo5, DecInOtl5, divDra6]);

const sumToLoTeUse6 = () => {
  try {
   
    const result = eval(`  (${NetLoss6 || 0} + ${IninFiAss6 || 0} + ${IniNoCuAss6 || 0} + ${IncintAss6 || 0}
    + ${DeciTerLo6 || 0} + ${DecInOtl6 || 0} + ${divDra7 || 0} `);
    setToLoTeUse6(result);
  } catch (error) {
    setToLoTeUse6("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse6();
}, [NetLoss6, IninFiAss6, IniNoCuAss6, IncintAss6, DeciTerLo6, DecInOtl6, divDra7]);

const sumToLoTeUse7 = () => {
  try {
   
    const result = eval(`  (${NetLoss7 || 0} + ${IninFiAss7 || 0} + ${IniNoCuAss7 || 0} + ${IncintAss7 || 0}
    + ${DeciTerLo7 || 0} + ${DecInOtl7 || 0} + ${divDra8 || 0} `);
    setToLoTeUse7(result);
  } catch (error) {
    setToLoTeUse7("Input all ");  
  }
};

useEffect(() => {
sumToLoTeUse7();
}, [NetLoss7, IninFiAss7, IniNoCuAss7, IncintAss7, DeciTerLo7, DecInOtl7, divDra8]);


















  


  
  const OtLoTeLi1= localStorage.getItem('OtLoTeLi1');
  const OtLoTeLi2= localStorage.getItem('OtLoTeLi2');
  const OtLoTeLi3= localStorage.getItem('OtLoTeLi3');
  const OtLoTeLi4= localStorage.getItem('OtLoTeLi4');
  const OtLoTeLi5= localStorage.getItem('OtLoTeLi5');
  const OtLoTeLi6= localStorage.getItem('OtLoTeLi6');
  const OtLoTeLi7= localStorage.getItem('OtLoTeLi7');
  const OtLoTeLi8= localStorage.getItem('OtLoTeLi8');


  
  // const ToOtTeLi1= localStorage.getItem('ToOtTeLi1');
  // const ToOtTeLi2= localStorage.getItem('ToOtTeLi2');
  // const ToOtTeLi3= localStorage.getItem('ToOtTeLi3');
  // const ToOtTeLi4= localStorage.getItem('ToOtTeLi4');
  // const ToOtTeLi5= localStorage.getItem('ToOtTeLi5');
  // const ToOtTeLi6= localStorage.getItem('ToOtTeLi6');
  // const ToOtTeLi7= localStorage.getItem('ToOtTeLi7');
  // const ToOtTeLi8= localStorage.getItem('ToOtTeLi8');


  
  const[InOtTeLia1,setInOtTeLia1] = useState('');
  const[InOtTeLia2,setInOtTeLia2] = useState('');
  const[InOtTeLia3,setInOtTeLia3] = useState('');
  const[InOtTeLia4,setInOtTeLia4] = useState('');
  const[InOtTeLia5,setInOtTeLia5] = useState('');
  const[InOtTeLia6,setInOtTeLia6] = useState('');
  const[InOtTeLia7,setInOtTeLia7] = useState('');


  
const valInOtTeLia1 = () => {
  try {

    
    const result =  ({OtLoTeLi2} - {OtLoTeLi1})  > 0 ?  ({OtLoTeLi2} - {OtLoTeLi1}) : "0";
    setInOtTeLia1(result);
  } catch (error) {
    setInOtTeLia1(" "); 
  }
};

useEffect(() => {
  valInOtTeLia1();
}, [OtLoTeLi2, OtLoTeLi1 ]);

 
const valInOtTeLia2 = () => {
  try {

    
    const result =  ({OtLoTeLi3} - {OtLoTeLi2})  > 0 ?  ({OtLoTeLi3} - {OtLoTeLi2}) : "0";
    setInOtTeLia2(result);
  } catch (error) {
    setInOtTeLia2(" "); 
  }
};

useEffect(() => {
  valInOtTeLia2();
}, [OtLoTeLi3, OtLoTeLi2 ]);

 
const valInOtTeLia3 = () => {
  try {

    
    const result =  ({OtLoTeLi4} - {OtLoTeLi3})  > 0 ?  ({OtLoTeLi4} - {OtLoTeLi3}) : "0";
    setInOtTeLia3(result);
  } catch (error) {
    setInOtTeLia3(" "); 
  }
};

useEffect(() => {
  valInOtTeLia3();
}, [OtLoTeLi4, OtLoTeLi3 ]);

 
const valInOtTeLia4 = () => {
  try {

    
    const result =  ({OtLoTeLi5} - {OtLoTeLi4})  > 0 ?  ({OtLoTeLi5} - {OtLoTeLi4}) : "0";
    setInOtTeLia4(result);
  } catch (error) {
    setInOtTeLia4(" "); 
  }
};

useEffect(() => {
  valInOtTeLia4();
}, [OtLoTeLi5, OtLoTeLi4 ]);

 
const valInOtTeLia5 = () => {
  try {

    
    const result =  ({OtLoTeLi6} - {OtLoTeLi5})  > 0 ?  ({OtLoTeLi6} - {OtLoTeLi5}) : "0";
    setInOtTeLia5(result);
  } catch (error) {
    setInOtTeLia5(" "); 
  }
};

useEffect(() => {
  valInOtTeLia5();
}, [OtLoTeLi6, OtLoTeLi5 ]);

 
const valInOtTeLia6 = () => {
  try {

    
    const result =  ({OtLoTeLi7} - {OtLoTeLi6})  > 0 ?  ({OtLoTeLi7} - {OtLoTeLi6}) : "0";
    setInOtTeLia6(result);
  } catch (error) {
    setInOtTeLia6(" "); 
  }
};

useEffect(() => {
  valInOtTeLia6();
}, [OtLoTeLi7, OtLoTeLi6 ]);


 
const valInOtTeLia7 = () => {
  try {

    
    const result =  ({OtLoTeLi8} - {OtLoTeLi7})  > 0 ?  ({OtLoTeLi8} - {OtLoTeLi7}) : "0";
    setInOtTeLia7(result);
  } catch (error) {
    setInOtTeLia7(" "); 
  }
};

useEffect(() => {
  valInOtTeLia7();
}, [OtLoTeLi8, OtLoTeLi7 ]);




  
  const[InTeLo1,setInTeLo1] = useState('')
  const[InTeLo2,setInTeLo2] = useState('')
  const[InTeLo3,setInTeLo3] = useState('')
  const[InTeLo4,setInTeLo4] = useState('')
  const[InTeLo5,setInTeLo5] = useState('')
  const[InTeLo6,setInTeLo6] = useState('')
  const[InTeLo7,setInTeLo7] = useState('')


  
const valInTeLo1 = () => {
  try {

    
    const result = ({TerLoa2}-{TerLoa1}) > 0 ? ({TerLoa2}-{TerLoa1}) : 0;
    setInTeLo1(result);
  } catch (error) {
    setInTeLo1(" "); 
  }
};

useEffect(() => {
  valInTeLo1();
}, [TerLoa2,TerLoa1]);

const valInTeLo2 = () => {
  try {

    
    const result = ({TerLoa3}-{TerLoa2}) > 0 ? ({TerLoa3}-{TerLoa2}) : 0;
    setInTeLo2(result);
  } catch (error) {
    setInTeLo2(" "); 
  }
};

useEffect(() => {
  valInTeLo2();
}, [TerLoa3,TerLoa2]);

const valInTeLo3 = () => {
  try {

    
    const result = ({TerLoa4}-{TerLoa3}) > 0 ? ({TerLoa4}-{TerLoa3}) : 0;
    setInTeLo3(result);
  } catch (error) {
    setInTeLo3(" "); 
  }
};

useEffect(() => {
  valInTeLo3();
}, [TerLoa4,TerLoa3]);

const valInTeLo4 = () => {
  try {

    
    const result = ({TerLoa5}-{TerLoa4}) > 0 ? ({TerLoa5}-{TerLoa4}) : 0;
    setInTeLo4(result);
  } catch (error) {
    setInTeLo4(" "); 
  }
};

useEffect(() => {
  valInTeLo4();
}, [TerLoa5,TerLoa4]);

const valInTeLo5 = () => {
  try {

    
    const result = ({TerLoa6}-{TerLoa5}) > 0 ? ({TerLoa6}-{TerLoa5}) : 0;
    setInTeLo5(result);
  } catch (error) {
    setInTeLo5(" "); 
  }
};

useEffect(() => {
  valInTeLo5();
}, [TerLoa6,TerLoa5]);

const valInTeLo6 = () => {
  try {

    
    const result = ({TerLoa7}-{TerLoa6}) > 0 ? ({TerLoa7}-{TerLoa6}) : 0;
    setInTeLo6(result);
  } catch (error) {
    setInTeLo6(" "); 
  }
};

useEffect(() => {
  valInTeLo6();
}, [TerLoa7,TerLoa6]);
















  


  
  const dePre1= localStorage.getItem('dePre1');
  const dePre2= localStorage.getItem('dePre2');
  const dePre3= localStorage.getItem('dePre3');
  const dePre4= localStorage.getItem('dePre4');
  const dePre5= localStorage.getItem('dePre5');
  const dePre6= localStorage.getItem('dePre6');
  const dePre7= localStorage.getItem('dePre7');
  const dePre8= localStorage.getItem('dePre8');

  
  const PaUpCa1= localStorage.getItem('PaUpCa1');
  const PaUpCa2= localStorage.getItem('PaUpCa2');
  const PaUpCa3= localStorage.getItem('PaUpCa3');
  const PaUpCa4= localStorage.getItem('PaUpCa4');
  const PaUpCa5= localStorage.getItem('PaUpCa5');
  const PaUpCa6= localStorage.getItem('PaUpCa6');
  const PaUpCa7= localStorage.getItem('PaUpCa7');
  const PaUpCa8= localStorage.getItem('PaUpCa8');

  const ReSur1= localStorage.getItem('ReSur1');
  const ReSur2= localStorage.getItem('ReSur2');
  const ReSur3= localStorage.getItem('ReSur3');
  const ReSur4= localStorage.getItem('ReSur4');
  const ReSur5= localStorage.getItem('ReSur5');
  const ReSur6= localStorage.getItem('ReSur6');
  const ReSur7= localStorage.getItem('ReSur7');
  const ReSur8= localStorage.getItem('ReSur8');






  
  const[Deprec1,setDeprec1] = useState('')
  const[Deprec2,setDeprec2] = useState('')
  const[Deprec3,setDeprec3] = useState('')
  const[Deprec4,setDeprec4] = useState('')
  const[Deprec5,setDeprec5] = useState('')
  const[Deprec6,setDeprec6] = useState('')
  const[Deprec7,setDeprec7] = useState('')

  
  const[InCaRe1,setInCaRe1] = useState('')
  const[InCaRe2,setInCaRe2] = useState('')
  const[InCaRe3,setInCaRe3] = useState('')
  const[InCaRe4,setInCaRe4] = useState('')
  const[InCaRe5,setInCaRe5] = useState('')
  const[InCaRe6,setInCaRe6] = useState('')
  const[InCaRe7,setInCaRe7] = useState('')


  
const sumInCaRe1 = () => {
  try {
   
    const result = eval(`  (${PaUpCa2 || 0} + ${ReSur2 || 0})  - (${PaUpCa1 || 0} + ${ReSur1 || 0}) `);
    setInCaRe1(result);
  } catch (error) {
    setInCaRe1("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe1();
}, [PaUpCa2,ReSur2,PaUpCa1,ReSur1]);

const sumInCaRe2 = () => {
  try {
   
    const result = eval(`  (${PaUpCa3 || 0} + ${ReSur3 || 0})  - (${PaUpCa2 || 0} + ${ReSur2 || 0}) `);
    setInCaRe2(result);
  } catch (error) {
    setInCaRe2("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe2();
}, [PaUpCa3,ReSur3,PaUpCa2,ReSur2]);

const sumInCaRe3 = () => {
  try {
   
    const result = eval(`  (${PaUpCa4 || 0} + ${ReSur4 || 0})  - (${PaUpCa3 || 0} + ${ReSur3 || 0}) `);
    setInCaRe3(result);
  } catch (error) {
    setInCaRe3("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe3();
}, [PaUpCa4,ReSur4,PaUpCa3,ReSur3]);


const sumInCaRe4 = () => {
  try {
   
    const result = eval(`  (${PaUpCa5 || 0} + ${ReSur5 || 0})  - (${PaUpCa4 || 0} + ${ReSur4 || 0}) `);
    setInCaRe4(result);
  } catch (error) {
    setInCaRe4("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe4();
}, [PaUpCa5,ReSur5,PaUpCa4,ReSur4]);


const sumInCaRe5 = () => {
  try {
   
    const result = eval(`  (${PaUpCa6 || 0} + ${ReSur6 || 0})  - (${PaUpCa5 || 0} + ${ReSur5 || 0}) `);
    setInCaRe5(result);
  } catch (error) {
    setInCaRe5("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe5();
}, [PaUpCa6,ReSur6,PaUpCa5,ReSur5]);

const sumInCaRe6 = () => {
  try {
   
    const result = eval(`  (${PaUpCa7 || 0} + ${ReSur7 || 0})  - (${PaUpCa6 || 0} + ${ReSur6 || 0}) `);
    setInCaRe6(result);
  } catch (error) {
    setInCaRe6("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe6();
}, [PaUpCa7,ReSur7,PaUpCa6,ReSur6]);


const sumInCaRe7 = () => {
  try {
   
    const result = eval(`  (${PaUpCa8 || 0} + ${ReSur8 || 0})  - (${PaUpCa7 || 0} + ${ReSur7 || 0}) `);
    setInCaRe7(result);
  } catch (error) {
    setInCaRe7("Input all ");  
  }
};

useEffect(() => {
  sumInCaRe7();
}, [PaUpCa8,ReSur8,PaUpCa7,ReSur7]);






  
  



  
const sumDeprec1 = () => {
  try {
   
    const result = eval(`  (${dePre2 || 0} - ${dePre1 || 0})  `);
    setDeprec1(result);
  } catch (error) {
    setDeprec1("Input all ");  
  }
};

useEffect(() => {
  sumDeprec1();
}, [dePre2]);


  
const sumDeprec2 = () => {
  try {
   
    const result = eval(`  (${dePre3 || 0} - ${dePre2 || 0})  `);
    setDeprec2(result);
  } catch (error) {
    setDeprec2("Input all ");  
  }
};

useEffect(() => {
  sumDeprec2();
}, [dePre3]);

const sumDeprec3 = () => {
  try {
   
    const result = eval(`  (${dePre4 || 0} - ${dePre3 || 0})  `);
    setDeprec3(result);
  } catch (error) {
    setDeprec3("Input all ");  
  }
};

useEffect(() => {
  sumDeprec3();
}, [dePre4]);

const sumDeprec4 = () => {
  try {
   
    const result = eval(`  (${dePre5 || 0} - ${dePre4 || 0})  `);
    setDeprec4(result);
  } catch (error) {
    setDeprec4("Input all ");  
  }
};

useEffect(() => {
  sumDeprec4();
}, [dePre5]);

const sumDeprec5 = () => {
  try {
   
    const result = eval(`  (${dePre6 || 0} - ${dePre5 || 0})  `);
    setDeprec5(result);
  } catch (error) {
    setDeprec5("Input all ");  
  }
};

useEffect(() => {
  sumDeprec5();
}, [dePre6]);

const sumDeprec6 = () => {
  try {
   
    const result = eval(`  (${dePre7 || 0} - ${dePre6 || 0})  `);
    setDeprec6(result);
  } catch (error) {
    setDeprec6("Input all ");  
  }
};

useEffect(() => {
  sumDeprec6();
}, [dePre7]);

const sumDeprec7 = () => {
  try {
   
    const result = eval(`  (${dePre8 || 0} - ${dePre7 || 0})  `);
    setDeprec7(result);
  } catch (error) {
    setDeprec7("Input all ");  
  }
};

useEffect(() => {
  sumDeprec7();
}, [dePre8]);

















  const NePrafTa2 = localStorage.getItem('NePrafTa2');
  const NePrafTa3 = localStorage.getItem('NePrafTa3');
  const NePrafTa4 = localStorage.getItem('NePrafTa4');
  const NePrafTa5 = localStorage.getItem('NePrafTa5');
  const NePrafTa6 = localStorage.getItem('NePrafTa6');
  const NePrafTa7 = localStorage.getItem('NePrafTa7');
  const NePrafTa8 = localStorage.getItem('NePrafTa8');
  


  
  const[NetPrAfTa1,setNetPrAfTa1] = useState('')
  const[NetPrAfTa2,setNetPrAfTa2] = useState('')
  const[NetPrAfTa3,setNetPrAfTa3] = useState('')
  const[NetPrAfTa4,setNetPrAfTa4] = useState('')
  const[NetPrAfTa5,setNetPrAfTa5] = useState('')
  const[NetPrAfTa6,setNetPrAfTa6] = useState('')
  const[NetPrAfTa7,setNetPrAfTa7] = useState('')
  const[NetPrAfTa8,setNetPrAfTa8] = useState('')


  // const sumNetPrAfTa1 = () => {
  //   try {
     
  //     const result = NePrafTa2 > 0 ? {NePrafTa2} : "0";
  //     setNetPrAfTa1(result);
  //   } catch (error) {
  //     setNetPrAfTa1("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa1();
  // }, [NePrafTa2]);

  // const sumNetPrAfTa2 = () => {
  //   try {
     
  //     const result = NePrafTa3 > 0 ? {NePrafTa3} : "0";
  //     setNetPrAfTa2(result);
  //   } catch (error) {
  //     setNetPrAfTa2("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa2();
  // }, [NePrafTa3]);

  // const sumNetPrAfTa3 = () => {
  //   try {
     
  //     const result = NePrafTa4 > 0 ? {NePrafTa4} : "0";
  //     setNetPrAfTa3(result);
  //   } catch (error) {
  //     setNetPrAfTa3("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa3();
  // }, [NePrafTa4]);

  // const sumNetPrAfTa4 = () => {
  //   try {
     
  //     const result = NePrafTa5 > 0 ? {NePrafTa5} : "0";
  //     setNetPrAfTa4(result);
  //   } catch (error) {
  //     setNetPrAfTa4("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa4();
  // }, [NePrafTa5]);

  // const sumNetPrAfTa5 = () => {
  //   try {
     
  //     const result = NePrafTa6 > 0 ? {NePrafTa6} : "0";
  //     setNetPrAfTa5(result);
  //   } catch (error) {
  //     setNetPrAfTa5("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa5();
  // }, [NePrafTa6]);

  // const sumNetPrAfTa6 = () => {
  //   try {
     
  //     const result = NePrafTa7 > 0 ? {NePrafTa7} : "0";
  //     setNetPrAfTa6(result);
  //   } catch (error) {
  //     setNetPrAfTa6("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa6();
  // }, [NePrafTa7]);

  // const sumNetPrAfTa7 = () => {
  //   try {
     
  //     const result = NePrafTa8 > 0 ? {NePrafTa8} : "0";
  //     setNetPrAfTa7(result);
  //   } catch (error) {
  //     setNetPrAfTa7("Input all ");  
  //   }
  // };
  
  // useEffect(() => {
  //   sumNetPrAfTa7();
  // }, [NePrafTa8]);




  const sumToLoteSo1 = () => {
    try {
     
      const result = eval(`  (${NetPrAfTa1 || 0} + ${Deprec1 || 0} + ${InCaRe1 || 0} + ${InTeLo1 || 0} + ${InOtTeLia1 || 0} +
        ${DeIFiAs1 || 0} + ${DeINoCuAs1 || 0} + ${DeInAs1 || 0} `);

      setToLoteSo1(result);
    } catch (error) {
      setToLoteSo1("Input all ");  
    }
  };
  
  useEffect(() => {
    sumToLoteSo1();
  }, [NetPrAfTa1,Deprec1,InCaRe1,InTeLo1,InOtTeLia1,DeIFiAs1,DeINoCuAs1,DeInAs1]);

  
const sumToLoteSo2 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa2 || 0} + ${Deprec2 || 0} + ${InCaRe2 || 0} + ${InTeLo2 || 0} + ${InOtTeLia2 || 0} +
      ${DeIFiAs2 || 0} + ${DeINoCuAs2 || 0} + ${DeInAs2 || 0} `);

    setToLoteSo2(result);
  } catch (error) {
    setToLoteSo2("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo2();
}, [NetPrAfTa2,Deprec2,InCaRe2,InTeLo2,InOtTeLia2,DeIFiAs2,DeINoCuAs2,DeInAs2]);


const sumToLoteSo3 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa3 || 0} + ${Deprec3 || 0} + ${InCaRe3 || 0} + ${InTeLo3 || 0} + ${InOtTeLia3 || 0} +
      ${DeIFiAs3 || 0} + ${DeINoCuAs3 || 0} + ${DeInAs3 || 0} `);

    setToLoteSo3(result);
  } catch (error) {
    setToLoteSo3("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo3();
}, [NetPrAfTa3,Deprec3,InCaRe3,InTeLo3,InOtTeLia3,DeIFiAs3,DeINoCuAs3,DeInAs3]);


const sumToLoteSo4 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa4 || 0} + ${Deprec4 || 0} + ${InCaRe4 || 0} + ${InTeLo4 || 0} + ${InOtTeLia4 || 0} +
      ${DeIFiAs4 || 0} + ${DeINoCuAs4 || 0} + ${DeInAs4 || 0} `);

    setToLoteSo4(result);
  } catch (error) {
    setToLoteSo4("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo4();
}, [NetPrAfTa4,Deprec4,InCaRe4,InTeLo4,InOtTeLia4,DeIFiAs4,DeINoCuAs4,DeInAs4]);




const sumToLoteSo5 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa5 || 0} + ${Deprec5 || 0} + ${InCaRe5 || 0} + ${InTeLo5 || 0} + ${InOtTeLia5 || 0} +
      ${DeIFiAs5 || 0} + ${DeINoCuAs5 || 0} + ${DeInAs5 || 0} `);

    setToLoteSo5(result);
  } catch (error) {
    setToLoteSo5("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo5();
}, [NetPrAfTa5,Deprec5,InCaRe5,InTeLo5,InOtTeLia5,DeIFiAs5,DeINoCuAs5,DeInAs5]);



const sumToLoteSo6 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa6 || 0} + ${Deprec6 || 0} + ${InCaRe6 || 0} + ${InTeLo6 || 0} + ${InOtTeLia6 || 0} +
      ${DeIFiAs6 || 0} + ${DeINoCuAs6 || 0} + ${DeInAs6 || 0} `);

    setToLoteSo6(result);
  } catch (error) {
    setToLoteSo6("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo6();
}, [NetPrAfTa6,Deprec6,InCaRe6,InTeLo6,InOtTeLia6,DeIFiAs6,DeINoCuAs6,DeInAs6]);



const sumToLoteSo7 = () => {
  try {
   
    const result = eval(`  (${NetPrAfTa7 || 0} + ${Deprec7 || 0} + ${InCaRe7 || 0} + ${InTeLo7 || 0} + ${InOtTeLia7 || 0} +
      ${DeIFiAs7 || 0} + ${DeINoCuAs7 || 0} + ${DeInAs7 || 0} `);

    setToLoteSo7(result);
  } catch (error) {
    setToLoteSo7("Input all ");  
  }
};

useEffect(() => {
  sumToLoteSo7();
}, [NetPrAfTa7,Deprec7,InCaRe7,InTeLo7,InOtTeLia7,DeIFiAs7,DeINoCuAs7,DeInAs7]);




  const valNetLoss1 = () => {
    try {
  
      
      const result = {NePrafTa2} < 0 ?  (-1 * {NePrafTa2} ) : "0";
      setNetLoss1(result);
    } catch (error) {
      setNetLoss1(" "); 
    }
  };
  
  useEffect(() => {
    valNetLoss1();
  }, [NePrafTa2]);


  const valNetLoss2 = () => {
    try {
  
      
      const result =  ({NePrafTa3})  < 0 ?  (-1 * {NePrafTa3} ) : "0";
      setNetLoss2(result);
    } catch (error) {
      setNetLoss2(" "); 
    }
  };
  
  useEffect(() => {
    valNetLoss2();
  }, [NePrafTa3]);

  
const valNetLoss3 = () => {
  try {

    
    const result =  ({NePrafTa4})  < 0 ?  (-1 * {NePrafTa4} ) : "0";
    setNetLoss3(result);
  } catch (error) {
    setNetLoss3(" "); 
  }
};

useEffect(() => {
  valNetLoss3();
}, [NePrafTa4]);


const valNetLoss4 = () => {
  try {

    
    const result =  ({NePrafTa5})  < 0 ?  (-1 * {NePrafTa5} ) : "0";
    setNetLoss4(result);
  } catch (error) {
    setNetLoss4(" "); 
  }
};

useEffect(() => {
  valNetLoss4();
}, [NePrafTa5]);


const valNetLoss5 = () => {
  try {

    
    const result =  ({NePrafTa6})  < 0 ?  (-1 * {NePrafTa6} ) : "0";
    setNetLoss5(result);
  } catch (error) {
    setNetLoss5(" "); 
  }
};

useEffect(() => {
  valNetLoss5();
}, [NePrafTa6]);


const valNetLoss6 = () => {
  try {

    
    const result =  ({NePrafTa7})  < 0 ?  (-1 * {NePrafTa7} ) : "0";
    setNetLoss6(result);
  } catch (error) {
    setNetLoss6(" "); 
  }
};

useEffect(() => {
  valNetLoss6();
}, [NePrafTa7]);


const valNetLoss7 = () => {
  try {

    
    const result =  ({NePrafTa8})  < 0 ?  (-1 * {NePrafTa8} ) : "0";
    setNetLoss7(result);
  } catch (error) {
    setNetLoss7(" "); 
  }
};

useEffect(() => {
  valNetLoss7();
}, [NePrafTa8]);

    
const valIninFiAss1 = () => {
  try {

    
    const result =  ({GroBlo1} - {GroBlo2})  < 0 ? -1* ({GroBlo1} - {GroBlo2}) : "0";

    setIninFiAss1(result);
  } catch (error) {
    setIninFiAss1(" "); 
  }
};

useEffect(() => {
  valIninFiAss1();
}, [GroBlo1,GroBlo2]);

    
const valIninFiAss2 = () => {
  try {

    
    const result =  ({GroBlo2} - {GroBlo3})  < 0 ? -1* ({GroBlo2} - {GroBlo3}) : "0";

    setIninFiAss2(result);
  } catch (error) {
    setIninFiAss2(" "); 
  }
};

useEffect(() => {
  valIninFiAss2();
}, [GroBlo2,GroBlo3]);

    
const valIninFiAss3 = () => {
  try {

    
    const result =  ({GroBlo3} - {GroBlo4})  < 0 ? -1* ({GroBlo3} - {GroBlo4}) : "0";

    setIninFiAss3(result);
  } catch (error) {
    setIninFiAss3(" "); 
  }
};

useEffect(() => {
  valIninFiAss3();
}, [GroBlo3,GroBlo4]);

    
const valIninFiAss4 = () => {
  try {

    
    const result =  ({GroBlo4} - {GroBlo5})  < 0 ? -1* ({GroBlo4} - {GroBlo5}) : "0";

    setIninFiAss4(result);
  } catch (error) {
    setIninFiAss4(" "); 
  }
};

useEffect(() => {
  valIninFiAss4();
}, [GroBlo4,GroBlo5]);

    
const valIninFiAss5 = () => {
  try {

    
    const result =  ({GroBlo5} - {GroBlo6})  < 0 ? -1* ({GroBlo5} - {GroBlo6}) : "0";

    setIninFiAss5(result);
  } catch (error) {
    setIninFiAss5(" "); 
  }
};

useEffect(() => {
  valIninFiAss5();
}, [GroBlo5,GroBlo6]);

    
const valIninFiAss6 = () => {
  try {

    
    const result =  ({GroBlo6} - {GroBlo7})  < 0 ? -1* ({GroBlo6} - {GroBlo7}) : "0";

    setIninFiAss6(result);
  } catch (error) {
    setIninFiAss6(" "); 
  }
};

useEffect(() => {
  valIninFiAss6();
}, [GroBlo6,GroBlo7]);

    
const valIninFiAss7 = () => {
  try {

    
    const result =  ({GroBlo7} - {GroBlo8})  < 0 ? -1* ({GroBlo7} - {GroBlo8}) : "0";

    setIninFiAss7(result);
  } catch (error) {
    setIninFiAss7(" "); 
  }
};

useEffect(() => {
  valIninFiAss7();
}, [GroBlo7,GroBlo8]);



      
const valIniNoCuAss1 = () => {
  try {

    
    const result =  ({ToNca1} - {ToNca2})  < 0 ? -1* ({ToNca1} - {ToNca2}) : "0";

    setIniNoCuAss1(result);
  } catch (error) {
    setIniNoCuAss1(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss1();
}, [ToNca1,ToNca2]);

const valIniNoCuAss2 = () => {
  try {

    
    const result =  ({ToNca2} - {ToNca3})  < 0 ? -1* ({ToNca2} - {ToNca3}) : "0";

    setIniNoCuAss2(result);
  } catch (error) {
    setIniNoCuAss2(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss2();
}, [ToNca2,ToNca3]);

const valIniNoCuAss3 = () => {
  try {

    
    const result =  ({ToNca3} - {ToNca4})  < 0 ? -1* ({ToNca3} - {ToNca4}) : "0";

    setIniNoCuAss3(result);
  } catch (error) {
    setIniNoCuAss3(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss3();
}, [ToNca3,ToNca4]);

const valIniNoCuAss4 = () => {
  try {

    
    const result =  ({ToNca4} - {ToNca5})  < 0 ? -1* ({ToNca4} - {ToNca5}) : "0";

    setIniNoCuAss4(result);
  } catch (error) {
    setIniNoCuAss4(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss4();
}, [ToNca4,ToNca5]);



const valIniNoCuAss5 = () => {
  try {

    
    const result =  ({ToNca5} - {ToNca6})  < 0 ? -1* ({ToNca5} - {ToNca6}) : "0";

    setIniNoCuAss5(result);
  } catch (error) {
    setIniNoCuAss5(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss5();
}, [ToNca5,ToNca6]);

const valIniNoCuAss6 = () => {
  try {

    
    const result =  ({ToNca6} - {ToNca7})  < 0 ? -1* ({ToNca6} - {ToNca7}) : "0";

    setIniNoCuAss6(result);
  } catch (error) {
    setIniNoCuAss6(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss6();
}, [ToNca6,ToNca7]);

const valIniNoCuAss7 = () => {
  try {

    
    const result =  ({ToNca7} - {ToNca8})  < 0 ? -1* ({ToNca7} - {ToNca8}) : "0";

    setIniNoCuAss7(result);
  } catch (error) {
    setIniNoCuAss7(" "); 
  }
};

useEffect(() => {
  valIniNoCuAss7();
}, [ToNca7,ToNca8]);




// ---------------------------


const valIncintAss1 = () => {
  try {

    
    const result =  ({ToIa1} - {ToIa2})  < 0 ? -1* ({ToIa1} - {ToIa2}) : "0";

    setIncintAss1(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss1();
}, [ToIa1,ToIa2]);

const valIncintAss2 = () => {
  try {

    
    const result =  ({ToIa2} - {ToIa3})  < 0 ? -1* ({ToIa2} - {ToIa3}) : "0";

    setIncintAss2(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss2();
}, [ToIa2,ToIa3]);


const valIncintAss3 = () => {
  try {

    
    const result =  ({ToIa3} - {ToIa4})  < 0 ? -1* ({ToIa3} - {ToIa4}) : "0";

    setIncintAss3(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss3();
}, [ToIa3,ToIa4]);



const valIncintAss4 = () => {
  try {

    
    const result =  ({ToIa4} - {ToIa5})  < 0 ? -1* ({ToIa4} - {ToIa5}) : "0";

    setIncintAss4(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss4();
}, [ToIa4,ToIa5]);


const valIncintAss5 = () => {
  try {

    
    const result =  ({ToIa5} - {ToIa6})  < 0 ? -1* ({ToIa5} - {ToIa6}) : "0";

    setIncintAss5(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss5();
}, [ToIa5,ToIa6]);

const valIncintAss6 = () => {
  try {

    
    const result =  ({ToIa6} - {ToIa7})  < 0 ? -1* ({ToIa6} - {ToIa7}) : "0";

    setIncintAss6(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss6();
}, [ToIa6,ToIa7]);

const valIncintAss7 = () => {
  try {

    
    const result =  ({ToIa7} - {ToIa8})  < 0 ? -1* ({ToIa7} - {ToIa8}) : "0";

    setIncintAss7(result);
  } catch (error) {
    setIncintAss7(" "); 
  }
};

useEffect(() => {
  valIncintAss7();
}, [ToIa7,ToIa8]);



// const valDeciTerLo1 = () => {
//   try {

    
//     const result =  ({ToNca1} - {ToNca2})  < 0 ? -1* ({ToNca1} - {ToNca2}) : "0";

//     setDeciTerLo1(result);
//   } catch (error) {
//     setDeciTerLo1(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo1();
// }, [ToNca1,ToNca2]);



// const valDeciTerLo2 = () => {
//   try {

    
//     const result =  ({ToNca2} - {ToNca3})  < 0 ? -1* ({ToNca2} - {ToNca3}) : "0";

//     setDeciTerLo2(result);
//   } catch (error) {
//     setDeciTerLo2(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo2();
// }, [ToNca2,ToNca3]);




// const valDeciTerLo3 = () => {
//   try {

    
//     const result =  ({ToNca3} - {ToNca4})  < 0 ? -1* ({ToNca3} - {ToNca4}) : "0";

//     setDeciTerLo3(result);
//   } catch (error) {
//     setDeciTerLo3(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo3();
// }, [ToNca3,ToNca4]);



// const valDeciTerLo4 = () => {
//   try {

    
//     const result =  ({ToNca4} - {ToNca5})  < 0 ? -1* ({ToNca4} - {ToNca5}) : "0";

//     setDeciTerLo4(result);
//   } catch (error) {
//     setDeciTerLo4(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo4();
// }, [ToNca4,ToNca5]);




// const valDeciTerLo5 = () => {
//   try {

    
//     const result =  ({ToNca5} - {ToNca6})  < 0 ? -1* ({ToNca5} - {ToNca6}) : "0";

//     setDeciTerLo5(result);
//   } catch (error) {
//     setDeciTerLo5(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo5();
// }, [ToNca5,ToNca6]);




// const valDeciTerLo6 = () => {
//   try {

    
//     const result =  ({ToNca6} - {ToNca7})  < 0 ? -1* ({ToNca6} - {ToNca7}) : "0";

//     setDeciTerLo6(result);
//   } catch (error) {
//     setDeciTerLo6(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo6();
// }, [ToNca6,ToNca7]);



// const valDeciTerLo7 = () => {
//   try {

    
//     const result =  ({ToNca7} - {ToNca8})  < 0 ? -1* ({ToNca7} - {ToNca8}) : "0";

//     setDeciTerLo7(result);
//   } catch (error) {
//     setDeciTerLo7(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTerLo7();
// }, [ToNca7,ToNca8]);




const valDecInOtl1 = () => {
  try {

    
    const result =  ({OtLoTeLi2} - {OtLoTeLi1})  < 0 ? -1* ({OtLoTeLi2} - {OtLoTeLi1}) : "0";

    setDecInOtl1(result);
  } catch (error) {
    setDecInOtl1(" "); 
  }
};

useEffect(() => {
  valDecInOtl1();
}, [OtLoTeLi1,OtLoTeLi2]);


const valDecInOtl2 = () => {
  try {

    
    const result =  ({OtLoTeLi3} - {OtLoTeLi2})  < 0 ? -1* ({OtLoTeLi3} - {OtLoTeLi2}) : "0";

    setDecInOtl2(result);
  } catch (error) {
    setDecInOtl2(" "); 
  }
};

useEffect(() => {
  valDecInOtl2();
}, [OtLoTeLi2,OtLoTeLi3]);


const valDecInOtl3 = () => {
  try {

    
    const result =  ({OtLoTeLi4} - {OtLoTeLi3})  < 0 ? -1* ({OtLoTeLi4} - {OtLoTeLi3}) : "0";

    setDecInOtl3(result);
  } catch (error) {
    setDecInOtl3(" "); 
  }
};

useEffect(() => {
  valDecInOtl3();
}, [OtLoTeLi3,OtLoTeLi4]);


const valDecInOtl4 = () => {
  try {

    
    const result =  ({OtLoTeLi5} - {OtLoTeLi4})  < 0 ? -1* ({OtLoTeLi5} - {OtLoTeLi4}) : "0";

    setDecInOtl4(result);
  } catch (error) {
    setDecInOtl4(" "); 
  }
};

useEffect(() => {
  valDecInOtl4();
}, [OtLoTeLi4,OtLoTeLi5]);


const valDecInOtl5 = () => {
  try {

    
    const result =  ({OtLoTeLi6} - {OtLoTeLi5})  < 0 ? -1* ({OtLoTeLi6} - {OtLoTeLi5}) : "0";

    setDecInOtl5(result);
  } catch (error) {
    setDecInOtl5(" "); 
  }
};

useEffect(() => {
  valDecInOtl5();
}, [OtLoTeLi5,OtLoTeLi6]);


const valDecInOtl6 = () => {
  try {

    
    const result =  ({OtLoTeLi7} - {OtLoTeLi6})  < 0 ? -1* ({OtLoTeLi7} - {OtLoTeLi6}) : "0";

    setDecInOtl6(result);
  } catch (error) {
    setDecInOtl6(" "); 
  }
};

useEffect(() => {
  valDecInOtl6();
}, [OtLoTeLi6,OtLoTeLi7]);



const valDecInOtl7 = () => {
  try {

    
    const result =  ({OtLoTeLi8} - {OtLoTeLi7})  < 0 ? -1* ({OtLoTeLi8} - {OtLoTeLi7}) : "0";

    setDecInOtl7(result);
  } catch (error) {
    setDecInOtl7(" "); 
  }
};

useEffect(() => {
  valDecInOtl7();
}, [OtLoTeLi7,OtLoTeLi8]);



const sumLoTeSurDe1 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo1 || 0} - ${ToLoTeUse1 || 0}) `);
    setLoTeSurDe1(result);
  } catch (error) {
    setLoTeSurDe1("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe1();
}, [ToLoteSo1,ToLoTeUse1  ]);

const sumLoTeSurDe2 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo2 || 0} - ${ToLoTeUse2 || 0}) `);
    setLoTeSurDe2(result);
  } catch (error) {
    setLoTeSurDe2("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe2();
}, [ToLoteSo2,ToLoTeUse2  ]);

const sumLoTeSurDe3 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo3 || 0} - ${ToLoTeUse3 || 0}) `);
    setLoTeSurDe3(result);
  } catch (error) {
    setLoTeSurDe3("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe3();
}, [ToLoteSo3,ToLoTeUse3  ]);

const sumLoTeSurDe4 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo4 || 0} - ${ToLoTeUse4 || 0}) `);
    setLoTeSurDe4(result);
  } catch (error) {
    setLoTeSurDe4("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe4();
}, [ToLoteSo4,ToLoTeUse4  ]);

const sumLoTeSurDe5 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo5 || 0} - ${ToLoTeUse5 || 0}) `);
    setLoTeSurDe5(result);
  } catch (error) {
    setLoTeSurDe5("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe5();
}, [ToLoteSo5,ToLoTeUse5  ]);

const sumLoTeSurDe6 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo6 || 0} - ${ToLoTeUse6 || 0}) `);
    setLoTeSurDe6(result);
  } catch (error) {
    setLoTeSurDe6("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe6();
}, [ToLoteSo6,ToLoTeUse6  ]);

const sumLoTeSurDe7 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo7 || 0} - ${ToLoTeUse7 || 0}) `);
    setLoTeSurDe7(result);
  } catch (error) {
    setLoTeSurDe7("Input all ");  
  }
};

useEffect(() => {
  sumLoTeSurDe7();
}, [ToLoteSo7,ToLoTeUse7  ]);


const sumIncDecWC1 = () => {
  try {
   
    const result = eval(`  (${IncDecCA1 || 0}  - ${IncDecCl1 || 0})  `);
    setIncDecWC1(result);
  } catch (error) {
    setIncDecWC1("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC1();
}, [IncDecCA1,IncDecCl1]);


const sumIncDecWC2 = () => {
  try {
   
    const result = eval(`  (${IncDecCA2 || 0}  - ${IncDecCl2 || 0})  `);
    setIncDecWC2(result);
  } catch (error) {
    setIncDecWC2("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC2();
}, [IncDecCA2,IncDecCl2]);


const sumIncDecWC3 = () => {
  try {
   
    const result = eval(`  (${IncDecCA3 || 0}  - ${IncDecCl3 || 0})  `);
    setIncDecWC3(result);
  } catch (error) {
    setIncDecWC3("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC3();
}, [IncDecCA3,IncDecCl3]);


const sumIncDecWC4 = () => {
  try {
   
    const result = eval(`  (${IncDecCA4 || 0}  - ${IncDecCl4 || 0})  `);
    setIncDecWC4(result);
  } catch (error) {
    setIncDecWC4("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC4();
}, [IncDecCA4,IncDecCl4]);


const sumIncDecWC5 = () => {
  try {
   
    const result = eval(`  (${IncDecCA5 || 0}  - ${IncDecCl5 || 0})  `);
    setIncDecWC5(result);
  } catch (error) {
    setIncDecWC5("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC5();
}, [IncDecCA5,IncDecCl5]);


const sumIncDecWC6 = () => {
  try {
   
    const result = eval(`  (${IncDecCA6 || 0}  - ${IncDecCl6 || 0})  `);
    setIncDecWC6(result);
  } catch (error) {
    setIncDecWC6("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC6();
}, [IncDecCA6,IncDecCl6]);


const sumIncDecWC7 = () => {
  try {
   
    const result = eval(`  (${IncDecCA7 || 0}  - ${IncDecCl7 || 0})  `);
    setIncDecWC7(result);
  } catch (error) {
    setIncDecWC7("Input all ");  
  }
};

useEffect(() => {
  sumIncDecWC7();
}, [IncDecCA7,IncDecCl7]);


const sumNeSurDef1 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe1 || 0} - ${IncDecWC1 || 0})  `);
    setNeSurDef1(result);
  } catch (error) {
    setNeSurDef1("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef1();
}, [LoTeSurDe1,IncDecWC1]);



const sumNeSurDef2 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe2 || 0} - ${IncDecWC2 || 0})  `);
    setNeSurDef2(result);
  } catch (error) {
    setNeSurDef2("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef2();
}, [LoTeSurDe2,IncDecWC2]);


const sumNeSurDef3 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe3 || 0} - ${IncDecWC3 || 0})  `);
    setNeSurDef3(result);
  } catch (error) {
    setNeSurDef3("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef3();
}, [LoTeSurDe3,IncDecWC3]);


const sumNeSurDef4 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe4 || 0} - ${IncDecWC4 || 0})  `);
    setNeSurDef4(result);
  } catch (error) {
    setNeSurDef4("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef4();
}, [LoTeSurDe4,IncDecWC4]);


const sumNeSurDef5 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe5 || 0} - ${IncDecWC5 || 0})  `);
    setNeSurDef5(result);
  } catch (error) {
    setNeSurDef5("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef5();
}, [LoTeSurDe5,IncDecWC5]);


const sumNeSurDef6 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe6 || 0} - ${IncDecWC6 || 0})  `);
    setNeSurDef6(result);
  } catch (error) {
    setNeSurDef6("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef6();
}, [LoTeSurDe6,IncDecWC6]);


const sumNeSurDef7 = () => {
  try {
   
    const result = eval(`  (${LoTeSurDe7 || 0} - ${IncDecWC7 || 0})  `);
    setNeSurDef7(result);
  } catch (error) {
    setNeSurDef7("Input all ");  
  }
};

useEffect(() => {
  sumNeSurDef7();
}, [LoTeSurDe7,IncDecWC7]);





const sumIncDecBaBow1 = () => {
  try {
   
    const result = eval(`  (${wcBrIob2 || 0} + ${WcFrBI2 || 0}) - (${wcBrIob1 || 0} + ${WcFrBI1 || 0}) `);
    setIncDecBaBow1(result);
  } catch (error) {
    setIncDecBaBow1("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow1();
}, [wcBrIob2,wcBrIob1,WcFrBI1,WcFrBI2]);


const sumIncDecBaBow2 = () => {
  try {
   
    const result = eval(`  (${wcBrIob3 || 0} + ${WcFrBI3 || 0}) - (${wcBrIob2 || 0} + ${WcFrBI2 || 0}) `);
    setIncDecBaBow2(result);
  } catch (error) {
    setIncDecBaBow2("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow2();
}, [wcBrIob3,wcBrIob2,WcFrBI2,WcFrBI3]);


const sumIncDecBaBow3 = () => {
  try {
   
    const result = eval(`  (${wcBrIob4 || 0} + ${WcFrBI4 || 0}) - (${wcBrIob3 || 0} + ${WcFrBI3 || 0}) `);
    setIncDecBaBow3(result);
  } catch (error) {
    setIncDecBaBow3("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow3();
}, [wcBrIob4,wcBrIob3,WcFrBI3,WcFrBI4]);


const sumIncDecBaBow4 = () => {
  try {
   
    const result = eval(`  (${wcBrIob5 || 0} + ${WcFrBI5 || 0}) - (${wcBrIob4 || 0} + ${WcFrBI4 || 0}) `);
    setIncDecBaBow4(result);
  } catch (error) {
    setIncDecBaBow4("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow4();
}, [wcBrIob5,wcBrIob4,WcFrBI4,WcFrBI5]);



const sumIncDecBaBow5 = () => {
  try {
   
    const result = eval(`  (${wcBrIob6 || 0} + ${WcFrBI6 || 0}) - (${wcBrIob5 || 0} + ${WcFrBI5 || 0}) `);
    setIncDecBaBow5(result);
  } catch (error) {
    setIncDecBaBow5("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow5();
}, [wcBrIob6,wcBrIob5,WcFrBI5,WcFrBI6]);


const sumIncDecBaBow6 = () => {
  try {
   
    const result = eval(`  (${wcBrIob7 || 0} + ${WcFrBI7 || 0}) - (${wcBrIob6 || 0} + ${WcFrBI6 || 0}) `);
    setIncDecBaBow6(result);
  } catch (error) {
    setIncDecBaBow6("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow6();
}, [wcBrIob7,wcBrIob6,WcFrBI6,WcFrBI7]);



const sumIncDecBaBow7 = () => {
  try {
   
    const result = eval(`  (${wcBrIob8 || 0} + ${WcFrBI8 || 0}) - (${wcBrIob7 || 0} + ${WcFrBI7 || 0}) `);
    setIncDecBaBow7(result);
  } catch (error) {
    setIncDecBaBow7("Input all ");  
  }
};

useEffect(() => {
  sumIncDecBaBow7();
}, [wcBrIob8,wcBrIob7,WcFrBI7,WcFrBI8]);



const sumSurDefi1 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo1 || 0} - ${ToLoTeUse1 || 0})  `);
    setSurDefi1(result);
  } catch (error) {
    setSurDefi1("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi1();
}, [ToLoteSo1,ToLoTeUse1]);


const sumSurDefi2 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo2 || 0} - ${ToLoTeUse2 || 0})  `);
    setSurDefi2(result);
  } catch (error) {
    setSurDefi2("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi2();
}, [ToLoteSo2,ToLoTeUse2]);


const sumSurDefi3 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo3 || 0} - ${ToLoTeUse3 || 0})  `);
    setSurDefi3(result);
  } catch (error) {
    setSurDefi3("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi3();
}, [ToLoteSo3,ToLoTeUse3]);


const sumSurDefi4 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo4 || 0} - ${ToLoTeUse4 || 0})  `);
    setSurDefi4(result);
  } catch (error) {
    setSurDefi4("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi4();
}, [ToLoteSo4,ToLoTeUse4]);


const sumSurDefi5 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo5 || 0} - ${ToLoTeUse5 || 0})  `);
    setSurDefi5(result);
  } catch (error) {
    setSurDefi5("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi5();
}, [ToLoteSo5,ToLoTeUse5]);


const sumSurDefi6 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo6 || 0} - ${ToLoTeUse6 || 0})  `);
    setSurDefi6(result);
  } catch (error) {
    setSurDefi6("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi6();
}, [ToLoteSo6,ToLoTeUse6]);


const sumSurDefi7 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo7 || 0} - ${ToLoTeUse7 || 0})  `);
    setSurDefi7(result);
  } catch (error) {
    setSurDefi7("Input all ");  
  }
};

useEffect(() => {
  sumSurDefi7();
}, [ToLoteSo7,ToLoTeUse7]);


const sumLoTeUsLoSo1 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse1 || 0} / ${ToLoteSo1 || 0})  `);
    setLoTeUsLoSo1(result);
  } catch (error) {
    setLoTeUsLoSo1("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo1();
}, [ToLoteSo1,ToLoTeUse1]);


const sumLoTeUsLoSo2 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse2 || 0} / ${ToLoteSo2 || 0})  `);
    setLoTeUsLoSo2(result);
  } catch (error) {
    setLoTeUsLoSo2("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo2();
}, [ToLoteSo2,ToLoTeUse2]);

const sumLoTeUsLoSo3 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse3 || 0} / ${ToLoteSo3 || 0})  `);
    setLoTeUsLoSo3(result);
  } catch (error) {
    setLoTeUsLoSo3("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo3();
}, [ToLoteSo3,ToLoTeUse3]);

const sumLoTeUsLoSo4 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse4 || 0} / ${ToLoteSo4 || 0})  `);
    setLoTeUsLoSo4(result);
  } catch (error) {
    setLoTeUsLoSo4("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo4();
}, [ToLoteSo4,ToLoTeUse4]);

const sumLoTeUsLoSo5 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse5 || 0} / ${ToLoteSo5 || 0})  `);
    setLoTeUsLoSo5(result);
  } catch (error) {
    setLoTeUsLoSo5("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo5();
}, [ToLoteSo5,ToLoTeUse5]);

const sumLoTeUsLoSo6 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse6 || 0} / ${ToLoteSo6 || 0})  `);
    setLoTeUsLoSo6(result);
  } catch (error) {
    setLoTeUsLoSo6("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo6();
}, [ToLoteSo6,ToLoTeUse6]);

const sumLoTeUsLoSo7 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse7 || 0} / ${ToLoteSo7 || 0})  `);
    setLoTeUsLoSo7(result);
  } catch (error) {
    setLoTeUsLoSo7("Input all ");  
  }
};

useEffect(() => {
  sumLoTeUsLoSo7();
}, [ToLoteSo7,ToLoTeUse7]);




  
const valIncInSuCr1 = () => {
  try {

    
    const result = ({SunCrTr2} -{ SunCrTr1}) > 0 ? ({SunCrTr2} -{ SunCrTr1})   : 0;
    setIncInSuCr1(result);
  } catch (error) {
    setIncInSuCr1(" "); 
  }
};

useEffect(() => {
  valIncInSuCr1();
}, [SunCrTr2,SunCrTr1]);

  
const valIncInSuCr2 = () => {
  try {

    
    const result = ({SunCrTr3} -{ SunCrTr2}) > 0 ? ({SunCrTr3} -{ SunCrTr2})   : 0;
    setIncInSuCr2(result);
  } catch (error) {
    setIncInSuCr2(" "); 
  }
};

useEffect(() => {
  valIncInSuCr2();
}, [SunCrTr3,SunCrTr2]);


  
const valIncInSuCr3 = () => {
  try {

    
    const result = ({SunCrTr4} -{ SunCrTr3}) > 0 ? ({SunCrTr4} - { SunCrTr3})   : 0;
    setIncInSuCr3(result);
  } catch (error) {
    setIncInSuCr3(" "); 
  }
};

useEffect(() => {
  valIncInSuCr3();
}, [SunCrTr4,SunCrTr3]);

  
const valIncInSuCr4 = () => {
  try {

    
    const result = ({SunCrTr5} -{ SunCrTr4}) > 0 ? ({SunCrTr5} - { SunCrTr4})   : 0;
    setIncInSuCr4(result);
  } catch (error) {
    setIncInSuCr4(" "); 
  }
};

useEffect(() => {
  valIncInSuCr4();
}, [SunCrTr5,SunCrTr4]);

  
const valIncInSuCr5 = () => {
  try {

    
    const result = ({SunCrTr6} -{ SunCrTr5}) > 0 ? ({SunCrTr6} - { SunCrTr5})   : 0;
    setIncInSuCr5(result);
  } catch (error) {
    setIncInSuCr5(" "); 
  }
};

useEffect(() => {
  valIncInSuCr5();
}, [SunCrTr6,SunCrTr5]);


  
const valIncInSuCr6 = () => {
  try {

    
    const result = ({SunCrTr7} -{ SunCrTr6}) > 0 ? ({SunCrTr7} - { SunCrTr6})   : 0;
    setIncInSuCr6(result);
  } catch (error) {
    setIncInSuCr6(" "); 
  }
};

useEffect(() => {
  valIncInSuCr6();
}, [SunCrTr7,SunCrTr6]);

  
const valIncInSuCr7 = () => {
  try {

    
    const result = ({SunCrTr8} -{ SunCrTr7}) > 0 ? ({SunCrTr8} - { SunCrTr7})   : 0;
    setIncInSuCr7(result);
  } catch (error) {
    setIncInSuCr7(" "); 
  }
};

useEffect(() => {
  valIncInSuCr7();
}, [SunCrTr8,SunCrTr7]);



const valIncIOtCurLia1 = () => {
  try {

    
    const result =  ({OtCuLi2} - {OtCuLi1})  > 0 ?  ({OtCuLi2} - {OtCuLi1}) : "0";

    setIncIOtCurLia1(result);
  } catch (error) {
    setIncIOtCurLia1(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia1();
}, [OtCuLi2,OtCuLi1]);


const valIncIOtCurLia2 = () => {
  try {

    
    const result =  ({OtCuLi3} - {OtCuLi2})  > 0 ?  ({OtCuLi3} - {OtCuLi2}) : "0";

    setIncIOtCurLia2(result);
  } catch (error) {
    setIncIOtCurLia2(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia2();
}, [OtCuLi3,OtCuLi2]);


const valIncIOtCurLia3 = () => {
  try {

    
    const result =  ({OtCuLi4} - {OtCuLi3})  > 0 ?  ({OtCuLi4} - {OtCuLi3}) : "0";

    setIncIOtCurLia3(result);
  } catch (error) {
    setIncIOtCurLia3(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia3();
}, [OtCuLi4,OtCuLi3]);


const valIncIOtCurLia4 = () => {
  try {

    
    const result =  ({OtCuLi5} - {OtCuLi4})  > 0 ?  ({OtCuLi5} - {OtCuLi4}) : "0";

    setIncIOtCurLia4(result);
  } catch (error) {
    setIncIOtCurLia4(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia4();
}, [OtCuLi5,OtCuLi4]);




const valIncIOtCurLia5 = () => {
  try {

    
    const result =  ({OtCuLi6} - {OtCuLi5})  > 0 ?  ({OtCuLi6} - {OtCuLi5}) : "0";

    setIncIOtCurLia5(result);
  } catch (error) {
    setIncIOtCurLia5(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia5();
}, [OtCuLi6,OtCuLi5]);




const valIncIOtCurLia6 = () => {
  try {

    
    const result =  ({OtCuLi7} - {OtCuLi6})  > 0 ?  ({OtCuLi7} - {OtCuLi6}) : "0";

    setIncIOtCurLia6(result);
  } catch (error) {
    setIncIOtCurLia6(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia6();
}, [OtCuLi7,OtCuLi6]);


const valIncIOtCurLia7 = () => {
  try {

    
    const result =  ({OtCuLi8} - {OtCuLi7})  > 0 ?  ({OtCuLi8} - {OtCuLi7}) : "0";

    setIncIOtCurLia7(result);
  } catch (error) {
    setIncIOtCurLia7(" "); 
  }
};

useEffect(() => {
  valIncIOtCurLia7();
}, [OtCuLi8,OtCuLi7]);


const sumToShTeSo1 = () => {
  try {
   
    const result = eval(`  (${IncBanBor1 || 0} / ${IncInSuCr1 || 0}  ${IncIOtCurLia1 || 0}  ${DecIInven1 || 0}
                           ${DecIRec1 || 0}  ${DeOtCuAs1 || 0}  ) `);
    setToShTeSo1(result);
  } catch (error) {
    setToShTeSo1("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo1();
}, [IncBanBor1,IncInSuCr1,IncIOtCurLia1,DecIInven1,DecIRec1,DeOtCuAs1]);

const sumToShTeSo2 = () => {
  try {
   
    const result = eval(`  (${IncBanBor2 || 0} / ${IncInSuCr2 || 0}  ${IncIOtCurLia2 || 0}  ${DecIInven2 || 0}
                           ${DecIRec2 || 0}  ${DeOtCuAs2 || 0}  ) `);
    setToShTeSo2(result);
  } catch (error) {
    setToShTeSo2("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo2();
}, [IncBanBor2,IncInSuCr2,IncIOtCurLia2,DecIInven2,DecIRec2,DeOtCuAs2]);

const sumToShTeSo3 = () => {
  try {
   
    const result = eval(`  (${IncBanBor3 || 0} / ${IncInSuCr3 || 0}  ${IncIOtCurLia3 || 0}  ${DecIInven3 || 0}
                           ${DecIRec3 || 0}  ${DeOtCuAs3 || 0}  ) `);
    setToShTeSo3(result);
  } catch (error) {
    setToShTeSo3("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo3();
}, [IncBanBor3,IncInSuCr3,IncIOtCurLia3,DecIInven3,DecIRec3,DeOtCuAs3]);

const sumToShTeSo4 = () => {
  try {
   
    const result = eval(`  (${IncBanBor4 || 0} / ${IncInSuCr4 || 0}  ${IncIOtCurLia4 || 0}  ${DecIInven4 || 0}
                           ${DecIRec4 || 0}  ${DeOtCuAs4 || 0}  ) `);
    setToShTeSo4(result);
  } catch (error) {
    setToShTeSo4("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo4();
}, [IncBanBor4,IncInSuCr4,IncIOtCurLia4,DecIInven4,DecIRec4,DeOtCuAs4]);

const sumToShTeSo5 = () => {
  try {
   
    const result = eval(`  (${IncBanBor5 || 0} / ${IncInSuCr5 || 0}  ${IncIOtCurLia5 || 0}  ${DecIInven5 || 0}
                           ${DecIRec5 || 0}  ${DeOtCuAs5 || 0}  ) `);
    setToShTeSo5(result);
  } catch (error) {
    setToShTeSo5("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo5();
}, [IncBanBor5,IncInSuCr5,IncIOtCurLia5,DecIInven5,DecIRec5,DeOtCuAs5]);

const sumToShTeSo6 = () => {
  try {
   
    const result = eval(`  (${IncBanBor6 || 0} / ${IncInSuCr6 || 0}  ${IncIOtCurLia6 || 0}  ${DecIInven6 || 0}
                           ${DecIRec6 || 0}  ${DeOtCuAs6 || 0}  ) `);
    setToShTeSo6(result);
  } catch (error) {
    setToShTeSo6("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo6();
}, [IncBanBor6,IncInSuCr6,IncIOtCurLia6,DecIInven6,DecIRec6,DeOtCuAs6]);

const sumToShTeSo7 = () => {
  try {
   
    const result = eval(`  (${IncBanBor7 || 0} / ${IncInSuCr7 || 0}  ${IncIOtCurLia7 || 0}  ${DecIInven7 || 0}
                           ${DecIRec7 || 0}  ${DeOtCuAs7 || 0}  ) `);
    setToShTeSo7(result);
  } catch (error) {
    setToShTeSo7("Input all ");  
  }
};

useEffect(() => {
  sumToShTeSo7();
}, [IncBanBor7,IncInSuCr7,IncIOtCurLia7,DecIInven7,DecIRec7,DeOtCuAs7]);




     
const valDecInSuCr1 = () => {
  try {

    
    const result =  ({SunCrTr2} - {SunCrTr1})  < 0 ?  -1 *({SunCrTr2} - {SunCrTr1}) : "0";

    setDecInSuCr1(result);
  } catch (error) {
    setDecInSuCr1(" "); 
  }
};

useEffect(() => {
  valDecInSuCr1();
}, [SunCrTr1,SunCrTr2]);


const valDecInSuCr2 = () => {
  try {

    
    const result =  ({SunCrTr3} - {SunCrTr2})  < 0 ?  -1 *({SunCrTr3} - {SunCrTr2}) : "0";

    setDecInSuCr2(result);
  } catch (error) {
    setDecInSuCr2(" "); 
  }
};

useEffect(() => {
  valDecInSuCr2();
}, [SunCrTr2,SunCrTr3]);

const valDecInSuCr3 = () => {
  try {

    
    const result =  ({SunCrTr4} - {SunCrTr3})  < 0 ?  -1 *({SunCrTr4} - {SunCrTr3}) : "0";

    setDecInSuCr3(result);
  } catch (error) {
    setDecInSuCr3(" "); 
  }
};

useEffect(() => {
  valDecInSuCr3();
}, [SunCrTr3,SunCrTr4]);
const valDecInSuCr4 = () => {
  try {

    
    const result =  ({SunCrTr5} - {SunCrTr4})  < 0 ?  -1 *({SunCrTr5} - {SunCrTr4}) : "0";

    setDecInSuCr4(result);
  } catch (error) {
    setDecInSuCr4(" "); 
  }
};

useEffect(() => {
  valDecInSuCr4();
}, [SunCrTr4,SunCrTr5]);
const valDecInSuCr5 = () => {
  try {

    
    const result =  ({SunCrTr6} - {SunCrTr5})  < 0 ?  -1 *({SunCrTr6} - {SunCrTr5}) : "0";

    setDecInSuCr5(result);
  } catch (error) {
    setDecInSuCr5(" "); 
  }
};

useEffect(() => {
  valDecInSuCr5();
}, [SunCrTr5,SunCrTr6]);
const valDecInSuCr6 = () => {
  try {

    
    const result =  ({SunCrTr7} - {SunCrTr6})  < 0 ?  -1 *({SunCrTr7} - {SunCrTr6}) : "0";

    setDecInSuCr6(result);
  } catch (error) {
    setDecInSuCr6(" "); 
  }
};

useEffect(() => {
  valDecInSuCr6();
}, [SunCrTr6,SunCrTr7]);


const valDecInSuCr7 = () => {
  try {

    
    const result =  ({SunCrTr8} - {SunCrTr7})  < 0 ?  -1 *({SunCrTr8} - {SunCrTr7}) : "0";

    setDecInSuCr7(result);
  } catch (error) {
    setDecInSuCr7(" "); 
  }
};

useEffect(() => {
  valDecInSuCr7();
}, [SunCrTr7,SunCrTr8]);


const valDecOcl1 = () => {
  try {

    
    const result =  ({OtCuLi2} - {OtCuLi1})  < 0 ?  -1* ({OtCuLi2} - {OtCuLi1}) : "0";

    setDecOcl1(result);
  } catch (error) {
    setDecOcl1(" "); 
  }
};

useEffect(() => {
  valDecOcl1();
}, [OtCuLi2,OtCuLi1]);

const valDecOcl2 = () => {
  try {

    
    const result =  ({OtCuLi3} - {OtCuLi2})  < 0 ? -1* ({OtCuLi3} - {OtCuLi2}) : "0";

    setDecOcl2(result);
  } catch (error) {
    setDecOcl2(" "); 
  }
};

useEffect(() => {
  valDecOcl2();
}, [OtCuLi3,OtCuLi2]);
const valDecOcl3 = () => {
  try {

    
    const result =  ({OtCuLi4} - {OtCuLi3})  < 0 ? -1* ({OtCuLi4} - {OtCuLi3}) : "0";

    setDecOcl3(result);
  } catch (error) {
    setDecOcl3(" "); 
  }
};

useEffect(() => {
  valDecOcl3();
}, [OtCuLi4,OtCuLi3]);


const valDecOcl4 = () => {
  try {

    
    const result =  ({OtCuLi5} - {OtCuLi4})  < 0 ? -1* ({OtCuLi5} - {OtCuLi4}) : "0";

    setDecOcl4(result);
  } catch (error) {
    setDecOcl4(" "); 
  }
};

useEffect(() => {
  valDecOcl4();
}, [OtCuLi5,OtCuLi4]);


const valDecOcl5 = () => {
  try {

    
    const result =  ({OtCuLi6} - {OtCuLi5})  < 0 ? -1* ({OtCuLi6} - {OtCuLi5}) : "0";

    setDecOcl5(result);
  } catch (error) {
    setDecOcl5(" "); 
  }
};

useEffect(() => {
  valDecOcl5();
}, [OtCuLi6,OtCuLi5]);


const valDecOcl6 = () => {
  try {

    
    const result =  ({OtCuLi7} - {OtCuLi6})  < 0 ? -1* ({OtCuLi7} - {OtCuLi6}) : "0";

    setDecOcl6(result);
  } catch (error) {
    setDecOcl6(" "); 
  }
};

useEffect(() => {
  valDecOcl6();
}, [OtCuLi7,OtCuLi6]);


const valDecOcl7 = () => {
  try {

    
    const result =  ({OtCuLi8} - {OtCuLi7})  < 0 ? -1* ({OtCuLi8} - {OtCuLi7}) : "0";

    setDecOcl7(result);
  } catch (error) {
    setDecOcl7(" "); 
  }
};

useEffect(() => {
  valDecOcl7();
}, [OtCuLi8,OtCuLi7]);



      
const valIncInInv1 = () => {
  try {

    
    const result =  ({TotInv2} - {TotInv1})  >0 ?  ({TotInv2} - {TotInv1}) : "0";

    setIncInInv1(result);
  } catch (error) {
    setIncInInv1(" "); 
  }
};

useEffect(() => {
  valIncInInv1();
}, [TotInv2,TotInv1]);

const valIncInInv2 = () => {
  try {

    
    const result =  ({TotInv3} - {TotInv2})  >0 ?  ({TotInv3} - {TotInv2}) : "0";

    setIncInInv2(result);
  } catch (error) {
    setIncInInv2(" "); 
  }
};

useEffect(() => {
  valIncInInv2();
}, [TotInv3,TotInv2]);

const valIncInInv3 = () => {
  try {

    
    const result =  ({TotInv4} - {TotInv3})  >0 ?  ({TotInv4} - {TotInv3}) : "0";

    setIncInInv3(result);
  } catch (error) {
    setIncInInv3(" "); 
  }
};

useEffect(() => {
  valIncInInv3();
}, [TotInv4,TotInv3]);

const valIncInInv4 = () => {
  try {

    
    const result =  ({TotInv5} - {TotInv4})  >0 ?  ({TotInv5} - {TotInv4}) : "0";

    setIncInInv4(result);
  } catch (error) {
    setIncInInv4(" "); 
  }
};

useEffect(() => {
  valIncInInv4();
}, [TotInv5,TotInv4]);
const valIncInInv5 = () => {
  try {

    
    const result =  ({TotInv6} - {TotInv5})  >0 ?  ({TotInv6} - {TotInv5}) : "0";

    setIncInInv5(result);
  } catch (error) {
    setIncInInv5(" "); 
  }
};

useEffect(() => {
  valIncInInv5();
}, [TotInv6,TotInv5]);

const valIncInInv6 = () => {
  try {

    
    const result =  ({TotInv7} - {TotInv6})  >0 ?  ({TotInv7} - {TotInv6}) : "0";

    setIncInInv6(result);
  } catch (error) {
    setIncInInv6(" "); 
  }
};

useEffect(() => {
  valIncInInv6();
}, [TotInv7,TotInv6]);

const valIncInInv7 = () => {
  try {

    
    const result =  ({TotInv8} - {TotInv7})  >0 ?  ({TotInv8} - {TotInv7}) : "0";

    setIncInInv7(result);
  } catch (error) {
    setIncInInv7(" "); 
  }
};

useEffect(() => {
  valIncInInv7();
}, [TotInv8,TotInv7]);


const valIncIRec1 = () => {
  try {

    
    const result =  ({TrDeb2} - {TrDeb1})  >0 ? ({TrDeb2} - {TrDeb1}) : "0";

    setIncIRec1(result);
  } catch (error) {
    setIncIRec1(" "); 
  }
};

useEffect(() => {
  valIncIRec1();
}, [TrDeb1,TrDeb2]);
const valIncIRec2 = () => {
  try {

    
    const result =  ({TrDeb3} - {TrDeb2})  >0 ? ({TrDeb3} - {TrDeb2}) : "0";

    setIncIRec2(result);
  } catch (error) {
    setIncIRec2(" "); 
  }
};

useEffect(() => {
  valIncIRec2();
}, [TrDeb2,TrDeb3]);
const valIncIRec3 = () => {
  try {

    
    const result =  ({TrDeb4} - {TrDeb3})  >0 ? ({TrDeb4} - {TrDeb3}) : "0";

    setIncIRec3(result);
  } catch (error) {
    setIncIRec3(" "); 
  }
};

useEffect(() => {
  valIncIRec3();
}, [TrDeb3,TrDeb4]);


const valIncIRec4 = () => {
  try {

    
    const result =  ({TrDeb5} - {TrDeb4})  >0 ? ({TrDeb5} - {TrDeb4}) : "0";

    setIncIRec4(result);
  } catch (error) {
    setIncIRec4(" "); 
  }
};

useEffect(() => {
  valIncIRec4();
}, [TrDeb4,TrDeb5]);


const valIncIRec5 = () => {
  try {

    
    const result =  ({TrDeb6} - {TrDeb5})  >0 ? ({TrDeb6} - {TrDeb5}) : "0";

    setIncIRec5(result);
  } catch (error) {
    setIncIRec5(" "); 
  }
};

useEffect(() => {
  valIncIRec5();
}, [TrDeb5,TrDeb6]);


const valIncIRec6 = () => {
  try {

    
    const result =  ({TrDeb7} - {TrDeb6})  >0 ? ({TrDeb7} - {TrDeb6}) : "0";

    setIncIRec6(result);
  } catch (error) {
    setIncIRec6(" "); 
  }
};

useEffect(() => {
  valIncIRec6();
}, [TrDeb6,TrDeb7]);


const valIncIRec7 = () => {
  try {

    
    const result =  ({TrDeb8} - {TrDeb7})  >0 ? ({TrDeb8} - {TrDeb7}) : "0";

    setIncIRec7(result);
  } catch (error) {
    setIncIRec7(" "); 
  }
};

useEffect(() => {
  valIncIRec7();
}, [TrDeb7,TrDeb8]);


const valIncOca1 = () => {
  try {

    
    const result =  ({ToOtCuAs2} - {ToOtCuAs1})  < 0 ?  ({ToOtCuAs2} - {ToOtCuAs1}) : "0";

    setIncOca1(result);
  } catch (error) {
    setIncOca1(" "); 
  }
};

useEffect(() => {
  valIncOca1();
}, [ToOtCuAs2,ToOtCuAs1]);
const valIncOca2 = () => {
  try {

    
    const result =  ({ToOtCuAs3} - {ToOtCuAs2})  < 0 ?  ({ToOtCuAs3} - {ToOtCuAs2}) : "0";

    setIncOca2(result);
  } catch (error) {
    setIncOca2(" "); 
  }
};

useEffect(() => {
  valIncOca2();
}, [ToOtCuAs3,ToOtCuAs2]);

const valIncOca3 = () => {
  try {

    
    const result =  ({ToOtCuAs4} - {ToOtCuAs3})  < 0 ?  ({ToOtCuAs4} - {ToOtCuAs3}) : "0";

    setIncOca3(result);
  } catch (error) {
    setIncOca3(" "); 
  }
};

useEffect(() => {
  valIncOca3();
}, [ToOtCuAs4,ToOtCuAs3]);


const valIncOca4 = () => {
  try {

    
    const result =  ({ToOtCuAs5} - {ToOtCuAs4})  < 0 ?  ({ToOtCuAs5} - {ToOtCuAs4}) : "0";

    setIncOca4(result);
  } catch (error) {
    setIncOca4(" "); 
  }
};

useEffect(() => {
  valIncOca4();
}, [ToOtCuAs5,ToOtCuAs4]);
const valIncOca5 = () => {
  try {

    
    const result =  ({ToOtCuAs6} - {ToOtCuAs5})  < 0 ?  ({ToOtCuAs6} - {ToOtCuAs5}) : "0";

    setIncOca5(result);
  } catch (error) {
    setIncOca5(" "); 
  }
};

useEffect(() => {
  valIncOca5();
}, [ToOtCuAs6,ToOtCuAs5]);
const valIncOca6 = () => {
  try {

    
    const result =  ({ToOtCuAs7} - {ToOtCuAs6})  < 0 ?  ({ToOtCuAs7} - {ToOtCuAs6}) : "0";

    setIncOca6(result);
  } catch (error) {
    setIncOca6(" "); 
  }
};

useEffect(() => {
  valIncOca6();
}, [ToOtCuAs7,ToOtCuAs6]);
const valIncOca7 = () => {
  try {

    
    const result =  ({ToOtCuAs8} - {ToOtCuAs7})  < 0 ?  ({ToOtCuAs8} - {ToOtCuAs7}) : "0";

    setIncOca7(result);
  } catch (error) {
    setIncOca7(" "); 
  }
};

useEffect(() => {
  valIncOca7();
}, [ToOtCuAs8,ToOtCuAs7]);


  
const sumToShoTerSo1 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor1 || 0} / ${DecInSuCr1 || 0} ${DecOcl1 || 0}  ${IncInInv1 || 0}  
                            ${IncIRec1 || 0}  ${IncOca1 || 0}  ) `);
    setToShoTerSo1(result);
  } catch (error) {
    setToShoTerSo1("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo1();
}, [DecIBaBor1,DecInSuCr1,DecOcl1,IncInInv1,IncIRec1,IncOca1]);

  
const sumToShoTerSo2 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor2 || 0} / ${DecInSuCr2 || 0} ${DecOcl2 || 0}  ${IncInInv2 || 0}  
                            ${IncIRec2 || 0}  ${IncOca2 || 0}  ) `);
    setToShoTerSo2(result);
  } catch (error) {
    setToShoTerSo2("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo2();
}, [DecIBaBor2,DecInSuCr2,DecOcl2,IncInInv2,IncIRec2,IncOca2]);

  
const sumToShoTerSo3 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor3 || 0} / ${DecInSuCr3 || 0} ${DecOcl3 || 0}  ${IncInInv3 || 0}  
                            ${IncIRec3 || 0}  ${IncOca3 || 0}  ) `);
    setToShoTerSo3(result);
  } catch (error) {
    setToShoTerSo3("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo3();
}, [DecIBaBor3,DecInSuCr3,DecOcl3,IncInInv3,IncIRec3,IncOca3]);

  
const sumToShoTerSo4 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor4 || 0} / ${DecInSuCr4 || 0} ${DecOcl4 || 0}  ${IncInInv4 || 0}  
                            ${IncIRec4 || 0}  ${IncOca4 || 0}  ) `);
    setToShoTerSo4(result);
  } catch (error) {
    setToShoTerSo4("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo4();
}, [DecIBaBor4,DecInSuCr4,DecOcl4,IncInInv4,IncIRec4,IncOca4]);

  
const sumToShoTerSo5 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor5 || 0} / ${DecInSuCr5 || 0} ${DecOcl5 || 0}  ${IncInInv5 || 0}  
                            ${IncIRec5 || 0}  ${IncOca5 || 0}  ) `);
    setToShoTerSo5(result);
  } catch (error) {
    setToShoTerSo5("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo5();
}, [DecIBaBor5,DecInSuCr5,DecOcl5,IncInInv5,IncIRec5,IncOca5]);

  
const sumToShoTerSo6 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor6 || 0} / ${DecInSuCr6 || 0} ${DecOcl6 || 0}  ${IncInInv6 || 0}  
                            ${IncIRec6 || 0}  ${IncOca6 || 0}  ) `);
    setToShoTerSo6(result);
  } catch (error) {
    setToShoTerSo6("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo6();
}, [DecIBaBor6,DecInSuCr6,DecOcl6,IncInInv6,IncIRec6,IncOca6]);

  
const sumToShoTerSo7 = () => {
  try {
   
    const result = eval(`  (${DecIBaBor7 || 0} / ${DecInSuCr7 || 0} ${DecOcl7 || 0}  ${IncInInv7 || 0}  
                            ${IncIRec7 || 0}  ${IncOca7 || 0}  ) `);
    setToShoTerSo7(result);
  } catch (error) {
    setToShoTerSo7("Input all ");  
  }
};

useEffect(() => {
  sumToShoTerSo7();
}, [DecIBaBor7,DecInSuCr7,DecOcl7,IncInInv7,IncIRec7,IncOca7]);


  
const sumNwcAtEnYr1 = () => {
  try {
   
    const result = eval(`  (${NewoCa1 || 0} + ${IncDec2 || 0}) `);
    setNwcAtEnYr1(result);
  } catch (error) {
    setNwcAtEnYr1("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr1();
}, [NewoCa1,IncDec2]);

const sumNwcAtEnYr2 = () => {
  try {
   
    const result = eval(`  (${NewoCa2 || 0} + ${IncDec3 || 0}) `);
    setNwcAtEnYr2(result);
  } catch (error) {
    setNwcAtEnYr2("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr2();
}, [NewoCa2,IncDec3]);

const sumNwcAtEnYr3 = () => {
  try {
   
    const result = eval(`  (${NewoCa3 || 0} + ${IncDec4 || 0}) `);
    setNwcAtEnYr3(result);
  } catch (error) {
    setNwcAtEnYr3("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr3();
}, [NewoCa3,IncDec4]);

const sumNwcAtEnYr4 = () => {
  try {
   
    const result = eval(`  (${NewoCa4 || 0} + ${IncDec5 || 0}) `);
    setNwcAtEnYr4(result);
  } catch (error) {
    setNwcAtEnYr4("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr4();
}, [NewoCa4,IncDec5]);

const sumNwcAtEnYr5 = () => {
  try {
   
    const result = eval(`  (${NewoCa5 || 0} + ${IncDec6 || 0}) `);
    setNwcAtEnYr5(result);
  } catch (error) {
    setNwcAtEnYr5("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr5();
}, [NewoCa5,IncDec6]);

const sumNwcAtEnYr6 = () => {
  try {
   
    const result = eval(`  (${NewoCa6 || 0} + ${IncDec7 || 0}) `);
    setNwcAtEnYr6(result);
  } catch (error) {
    setNwcAtEnYr6("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr6();
}, [NewoCa6,IncDec7]);

const sumNwcAtEnYr7 = () => {
  try {
   
    const result = eval(`  (${NewoCa7 || 0} + ${IncDec8 || 0}) `);
    setNwcAtEnYr7(result);
  } catch (error) {
    setNwcAtEnYr7("Input all ");  
  }
};

useEffect(() => {
  sumNwcAtEnYr7();
}, [NewoCa7,IncDec8]);



  
const sumTotSou1 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo1 || 0} + ${ToShTeSo1 || 0}) `);
    setTotSou1(result);
  } catch (error) {
    setTotSou1("Input all ");  
  }
};

useEffect(() => {
  sumTotSou1();
}, [ToLoteSo1,ToShTeSo1]);

const sumTotSou2 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo2 || 0} + ${ToShTeSo2 || 0}) `);
    setTotSou2(result);
  } catch (error) {
    setTotSou2("Input all ");  
  }
};

useEffect(() => {
  sumTotSou2();
}, [ToLoteSo2,ToShTeSo2]);

const sumTotSou3 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo3 || 0} + ${ToShTeSo3 || 0}) `);
    setTotSou3(result);
  } catch (error) {
    setTotSou3("Input all ");  
  }
};

useEffect(() => {
  sumTotSou3();
}, [ToLoteSo3,ToShTeSo3]);

const sumTotSou4 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo4 || 0} + ${ToShTeSo4 || 0}) `);
    setTotSou4(result);
  } catch (error) {
    setTotSou4("Input all ");  
  }
};

useEffect(() => {
  sumTotSou4();
}, [ToLoteSo4,ToShTeSo4]);
const sumTotSou5 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo5 || 0} + ${ToShTeSo5 || 0}) `);
    setTotSou5(result);
  } catch (error) {
    setTotSou5("Input all ");  
  }
};

useEffect(() => {
  sumTotSou5();
}, [ToLoteSo5,ToShTeSo5]);


const sumTotSou6 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo6 || 0} + ${ToShTeSo6 || 0}) `);
    setTotSou6(result);
  } catch (error) {
    setTotSou6("Input all ");  
  }
};

useEffect(() => {
  sumTotSou6();
}, [ToLoteSo6,ToShTeSo6]);





const sumTotSou7 = () => {
  try {
   
    const result = eval(`  (${ToLoteSo7 || 0} + ${ToShTeSo7 || 0}) `);
    setTotSou7(result);
  } catch (error) {
    setTotSou7("Input all ");  
  }
};

useEffect(() => {
  sumTotSou7();
}, [ToLoteSo7,ToShTeSo7]);

const sumTotUse1 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse1 || 0} + ${ToShoTerSo1 || 0}) `);
    setTotUse1(result);
  } catch (error) {
    setTotUse1("Input all ");  
  }
};

useEffect(() => {
  sumTotUse1();
}, [ToLoTeUse1,ToShoTerSo1]);
  
const sumTotUse2 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse2 || 0} + ${ToShoTerSo2 || 0}) `);
    setTotUse2(result);
  } catch (error) {
    setTotUse2("Input all ");  
  }
};

useEffect(() => {
  sumTotUse2();
}, [ToLoTeUse2,ToShoTerSo2]);

  
const sumTotUse3 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse3 || 0} + ${ToShoTerSo3 || 0}) `);
    setTotUse3(result);
  } catch (error) {
    setTotUse3("Input all ");  
  }
};

useEffect(() => {
  sumTotUse3();
}, [ToLoTeUse3,ToShoTerSo3]);

  
const sumTotUse4 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse4 || 0} + ${ToShoTerSo4 || 0}) `);
    setTotUse4(result);
  } catch (error) {
    setTotUse4("Input all ");  
  }
};

useEffect(() => {
  sumTotUse4();
}, [ToLoTeUse4,ToShoTerSo4]);

  
const sumTotUse5 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse5 || 0} + ${ToShoTerSo5 || 0}) `);
    setTotUse5(result);
  } catch (error) {
    setTotUse5("Input all ");  
  }
};

useEffect(() => {
  sumTotUse5();
}, [ToLoTeUse5,ToShoTerSo5]);

  
const sumTotUse6 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse6 || 0} + ${ToShoTerSo6 || 0}) `);
    setTotUse6(result);
  } catch (error) {
    setTotUse6("Input all ");  
  }
};

useEffect(() => {
  sumTotUse6();
}, [ToLoTeUse6,ToShoTerSo6]);

  
const sumTotUse7 = () => {
  try {
   
    const result = eval(`  (${ToLoTeUse7 || 0} + ${ToShoTerSo7 || 0}) `);
    setTotUse7(result);
  } catch (error) {
    setTotUse7("Input all ");  
  }
};

useEffect(() => {
  sumTotUse7();
}, [ToLoTeUse7,ToShoTerSo7]);


    
const sumWheTal1 = () => {
  try {
   
    const result = eval(`  (${TotSou1 || 0} - ${TotUse1 || 0}) `);
    setWheTal1(result);
  } catch (error) {
    setWheTal1("Input all ");  
  }
};

useEffect(() => {
  sumWheTal1();
}, [TotSou1,TotUse1]);

const sumWheTal2 = () => {
  try {
   
    const result = eval(`  (${TotSou2 || 0} - ${TotUse2 || 0}) `);
    setWheTal2(result);
  } catch (error) {
    setWheTal2("Input all ");  
  }
};

useEffect(() => {
  sumWheTal2();
}, [TotSou2,TotUse2]);

const sumWheTal3 = () => {
  try {
   
    const result = eval(`  (${TotSou3 || 0} - ${TotUse3 || 0}) `);
    setWheTal3(result);
  } catch (error) {
    setWheTal3("Input all ");  
  }
};

useEffect(() => {
  sumWheTal3();
}, [TotSou3,TotUse3]);

const sumWheTal4 = () => {
  try {
   
    const result = eval(`  (${TotSou4 || 0} - ${TotUse4 || 0}) `);
    setWheTal4(result);
  } catch (error) {
    setWheTal4("Input all ");  
  }
};

useEffect(() => {
  sumWheTal4();
}, [TotSou4,TotUse4]);

const sumWheTal5 = () => {
  try {
   
    const result = eval(`  (${TotSou5 || 0} - ${TotUse5 || 0}) `);
    setWheTal5(result);
  } catch (error) {
    setWheTal5("Input all ");  
  }
};

useEffect(() => {
  sumWheTal5();
}, [TotSou5,TotUse5]);

const sumWheTal6 = () => {
  try {
   
    const result = eval(`  (${TotSou6 || 0} - ${TotUse6 || 0}) `);
    setWheTal6(result);
  } catch (error) {
    setWheTal6("Input all ");  
  }
};

useEffect(() => {
  sumWheTal6();
}, [TotSou6,TotUse6]);

const sumWheTal7 = () => {
  try {
   
    const result = eval(`  (${TotSou7 || 0} - ${TotUse7 || 0}) `);
    setWheTal7(result);
  } catch (error) {
    setWheTal7("Input all ");  
  }
};

useEffect(() => {
  sumWheTal7();
}, [TotSou7,TotUse7]);



  
const valDeciTeLo1 = () => {
  try {

    
    const result = ({TerLoa2}-{TerLoa1}) < 0 ? -1*({TerLoa2}-{TerLoa1}) : 0;
    setDeciTeLo1(result);
  } catch (error) {
    setDeciTeLo1(" "); 
  }
};

useEffect(() => {
  valDeciTeLo1();
}, [TerLoa2,TerLoa1]);



const valDeciTeLo2 = () => {
  try {

    
    const result = ({TerLoa3}-{TerLoa2}) < 0 ? -1*({TerLoa3}-{TerLoa2}) : 0;
    setDeciTeLo2(result);
  } catch (error) {
    setDeciTeLo2(" "); 
  }
};

useEffect(() => {
  valDeciTeLo2();
}, [TerLoa3,TerLoa2]);

const valDeciTeLo3 = () => {
  try {

    
    const result = ({TerLoa4}-{TerLoa3}) < 0 ? -1*({TerLoa4}-{TerLoa3}) : 0;
    setDeciTeLo3(result);
  } catch (error) {
    setDeciTeLo3(" "); 
  }
};

useEffect(() => {
  valDeciTeLo3();
}, [TerLoa4,TerLoa3]);

const valDeciTeLo4 = () => {
  try {

    
    const result = ({TerLoa5}-{TerLoa4}) < 0 ? -1*({TerLoa5}-{TerLoa4}) : 0;
    setDeciTeLo4(result);
  } catch (error) {
    setDeciTeLo4(" "); 
  }
};

useEffect(() => {
  valDeciTeLo4();
}, [TerLoa5,TerLoa4]);

const valDeciTeLo5 = () => {
  try {

    
    const result = ({TerLoa6}-{TerLoa5}) < 0 ? -1*({TerLoa6}-{TerLoa5}) : 0;
    setDeciTeLo5(result);
  } catch (error) {
    setDeciTeLo5(" "); 
  }
};

useEffect(() => {
  valDeciTeLo5();
}, [TerLoa6,TerLoa5]);

const valDeciTeLo6 = () => {
  try {

    
    const result = ({TerLoa7}-{TerLoa6}) < 0 ? -1*({TerLoa7}-{TerLoa6}) : 0;
    setDeciTeLo6(result);
  } catch (error) {
    setDeciTeLo6(" "); 
  }
};

useEffect(() => {
  valDeciTeLo6();
}, [TerLoa7,TerLoa6]);

// const valDeciTeLo7 = () => {
//   try {

    
//     const result = ({TerLoa8}-{TerLoa7}) < 0 ? -1*({TerLoa8}-{TerLoa7}) : 0;
//     setDeciTeLo7(result);
//   } catch (error) {
//     setDeciTeLo7(" "); 
//   }
// };

// useEffect(() => {
//   valDeciTeLo7();
// }, [TerLoa8,TerLoa7]);






















































































































  


  return (
    <div>
        <Navbar/>

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
                  VI  FUND FLOW DETAILED 
            </Col>

            <Col className="border border-solid" lg="8">
              <Row className="flex justify-center font-bold text-xl mb-3">
                For the year ended/ending (Rs. in Lacs)
              </Row>

              <Row>


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
          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              SOURCES :
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

        


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net profit after tax
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetPrAfTa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetPrAfTa7}
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
              {Deprec1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {Deprec2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Deprec3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Deprec4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Deprec5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Deprec6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Deprec7}
            </Col>
           
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Capital & Reserves
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InCaRe2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InCaRe7}
            </Col>
        
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Term Loan
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InTeLo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo7}
            </Col>
          
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Other Term Liabilities
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InOtTeLia2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InOtTeLia7}
            </Col>
          
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Fixed Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeIFiAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeIFiAs7}
            </Col>
           
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Non Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeINoCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeINoCuAs7}
            </Col>
           
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Intangible Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeInAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeInAs7}
            </Col>
            
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL LONG TERM SOURCES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoteSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo7}
            </Col>
           
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              USES :
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>


          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Loss
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetLoss2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetLoss7}
            </Col>
          
          </Row>

          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Fixed assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IninFiAss2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IninFiAss7}
            </Col>
          
          </Row>

          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Non Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IniNoCuAss2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IniNoCuAss7}
            </Col>
           
          </Row>

          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase Intangible Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncintAss2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncintAss7}
            </Col>
            
          </Row>

          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Term Loan
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeciTerLo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTerLo7}
            </Col>
           
          </Row>

          

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in O T L 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecInOtl2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInOtl7}
            </Col>
          
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Dividend payments
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { divDra2} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {divDra3} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {divDra4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {divDra5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {divDra6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { divDra7} 
            </Col>

             <Col className=" border border-solid  flex items-center justify-center">
              { divDra8} 
            </Col>
          
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL LONG TERM USES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoTeUse2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse7}
            </Col>
            
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold   text-l px-28 py-2 "
              lg="4"
            >
              LONG TERM SURPLUS/ DEFICIT
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {LoTeSurDe2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeSurDe7}
            </Col>
          
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase/decrease in C A
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDecCA2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCA7}
            </Col>
         
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inc./dec in C L excl Bank borrowing
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDecCl2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecCl7}
            </Col>
          
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase/decrease W C  gap
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDecWC2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecWC7}
            </Col>
           
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Surplus/ Deficit
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NeSurDef2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeSurDef7}
            </Col>
            
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inc./dec. in Bank Borrowing
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDecBaBow2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncDecBaBow7}
            </Col>
           
          </Row>

          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              FUND FLOW STATEMENT
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Long Term Sources 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoteSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo7}
            </Col>
         
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Long Term Uses 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoTeUse2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse7}
            </Col>
           
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Surplus/ Deficit
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {SurDefi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SurDefi7}
            </Col>
           
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Long Term Uses / Long Term Sources
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {LoTeUsLoSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeUsLoSo7}
            </Col>
           
          </Row>

          <Row   >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
                 II  BUILDING UP OF N W C 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          
          <Row  >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
                 SOURCES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Bank Borrowings
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncBanBor2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncBanBor7}
            </Col>
          
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Sundry Creditors
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncInSuCr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInSuCr7}
            </Col>
          
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase in Other Current Liabilities
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncIOtCurLia2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIOtCurLia7}
            </Col>
           
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Inventory
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecIInven2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIInven7}
            </Col>
           
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Receivables
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecIRec2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIRec7}
            </Col>
            
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Decrease in Other Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeOtCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeOtCuAs7}
            </Col>
           
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >TOTAL SHORT TERM SOURCES
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToShTeSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo7}
            </Col>

          </Row>


          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              USES
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y  text-l px-28 py-2 "
              lg="4"
            >Decrease in Bank Borrowings
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecIBaBor2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecIBaBor7}
            </Col>
            
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y  text-l px-28 py-2 "
              lg="4"
            >Decrease in Sundry Creditors
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecInSuCr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecInSuCr7}
            </Col>
           
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >Decrease in O C L
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DecOcl2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DecOcl7}
            </Col>
            
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y  text-l px-28 py-2 "
              lg="4"
            >Increase in Inventory
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncInInv2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInInv7}
            </Col>
          
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y  text-l px-28 py-2 "
              lg="4"
            >Increase in Receivables
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncIRec2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncIRec7}
            </Col>
          
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >Increase in O C A 
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncOca2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncOca7}
            </Col>
            
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >TOTAL SHORT TERM SOURCES
              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToShoTerSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo7}
            </Col>
            
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NWC at the beginning of the year
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NewoCa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa4} 
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
            
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase / Decrease in NWC
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec2} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IncDec3} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncDec8} 
            </Col>
           
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NWC at the end of the year
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NwcAtEnYr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NwcAtEnYr7}
            </Col>
          
          </Row>

          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              LONG TERM SOURCES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoteSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoteSo7}
            </Col>
            
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              SHORT TERM SOURCES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToShTeSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShTeSo7}
            </Col>
           
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               TOTAL SOURCES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TotSou2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotSou7}
            </Col>
          
          </Row>

          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                LONG TERM USES
            </Col>

           
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLoTeUse2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLoTeUse7}
            </Col>
           
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               SHORT TERM USES
            </Col>

           
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToShoTerSo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToShoTerSo7}
            </Col>
          
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                 TOTAL  USES 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TotUse2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotUse7}
            </Col>
         
          </Row>

          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                Whether Tallied / Difference ?
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {WheTal2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WheTal7}
            </Col>
           
          </Row>

      

          <Row className='mt-4' >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                TERM LOAN
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TerLoa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa7}
            </Col>
          
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                INCREASE  IN TERM LOAN
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {InTeLo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {InTeLo7}
            </Col>
            
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
                DECREASE IN TERM LOAN
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DeciTeLo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DeciTeLo7}
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
  )
}

export default Ff
