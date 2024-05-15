import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const KfI = () => {

  
  const[DrPowe1,setDrPowe1] =useState('');
  const[DrPowe2,setDrPowe2] =useState('');
  const[DrPowe3,setDrPowe3] =useState('');
  const[DrPowe4,setDrPowe4] =useState('');
  const[DrPowe5,setDrPowe5] =useState('');
  const[DrPowe6,setDrPowe6] =useState('');
  const[DrPowe7,setDrPowe7] =useState('');
  const[DrPowe8,setDrPowe8] =useState('');



  








  const[DraPow1,setDraPow1] =useState('');
  const[DraPow2,setDraPow2] =useState('');
  const[DraPow3,setDraPow3] =useState('');
  const[DraPow4,setDraPow4] =useState('');
  const[DraPow5,setDraPow5] =useState('');
  const[DraPow6,setDraPow6] =useState('');
  const[DraPow7,setDraPow7] =useState('');
  const[DraPow8,setDraPow8] =useState('');


    
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

  const BanOut1 = wcBrIob1 +  WcFrBI1;
  const BanOut2 = wcBrIob2 +  WcFrBI2;
const BanOut3 = wcBrIob3 +  WcFrBI3;
const BanOut4 = wcBrIob4 +  WcFrBI4;
const BanOut5 = wcBrIob5 +  WcFrBI5;
const BanOut6 = wcBrIob6 +  WcFrBI6;
const BanOut7 = wcBrIob7 +  WcFrBI7;
const BanOut8 = wcBrIob8 +  WcFrBI8;


  
  const TotInv1 = localStorage.getItem('TotInv1');
  const TotInv2 = localStorage.getItem('TotInv2');
  const TotInv3 = localStorage.getItem('TotInv3');
  const TotInv4 = localStorage.getItem('TotInv4');
  const TotInv5 = localStorage.getItem('TotInv5');
  const TotInv6 = localStorage.getItem('TotInv6');
  const TotInv7 = localStorage.getItem('TotInv7');
  const TotInv8 = localStorage.getItem('TotInv8');

  


  

  


  
  const MonPur1 = localStorage.getItem('MonPur1');
  const MonPur2 = localStorage.getItem('MonPur2');
  const MonPur3 = localStorage.getItem('MonPur3');
  const MonPur4 = localStorage.getItem('MonPur4');
  const MonPur5 = localStorage.getItem('MonPur5');
  const MonPur6 = localStorage.getItem('MonPur6');
  const MonPur7 = localStorage.getItem('MonPur7');
  const MonPur8 = localStorage.getItem('MonPur8');


  
  const SunCrTr1 = localStorage.getItem('SunCrTr1');
  const SunCrTr2 = localStorage.getItem('SunCrTr2');
  const SunCrTr3 = localStorage.getItem('SunCrTr3');
  const SunCrTr4 = localStorage.getItem('SunCrTr4');
  const SunCrTr5 = localStorage.getItem('SunCrTr5');
  const SunCrTr6 = localStorage.getItem('SunCrTr6');
  const SunCrTr7 = localStorage.getItem('SunCrTr7');
  const SunCrTr8 = localStorage.getItem('SunCrTr8');

  
  const MonGrSa1 = localStorage.getItem('MonGrSa1');
  const MonGrSa2 = localStorage.getItem('MonGrSa2');
  const MonGrSa3 = localStorage.getItem('MonGrSa3');
  const MonGrSa4 = localStorage.getItem('MonGrSa4');
  const MonGrSa5 = localStorage.getItem('MonGrSa5');
  const MonGrSa6 = localStorage.getItem('MonGrSa6');
  const MonGrSa7 = localStorage.getItem('MonGrSa7');
  const MonGrSa8 = localStorage.getItem('MonGrSa8');



  const Reci1 = localStorage.getItem('Reci1');
  const Reci2 = localStorage.getItem('Reci2');
  const Reci3 = localStorage.getItem('Reci3');
  const Reci4 = localStorage.getItem('Reci4');
  const Reci5 = localStorage.getItem('Reci5');
  const Reci6 = localStorage.getItem('Reci6');
  const Reci7 = localStorage.getItem('Reci7');
  const Reci8 = localStorage.getItem('Reci8');

  
  
  const MonCoSa1 = localStorage.getItem('MonCoSa1');
  const MonCoSa2 = localStorage.getItem('MonCoSa2');
  const MonCoSa3 = localStorage.getItem('MonCoSa3');
  const MonCoSa4 = localStorage.getItem('MonCoSa4');
  const MonCoSa5 = localStorage.getItem('MonCoSa5');
  const MonCoSa6 = localStorage.getItem('MonCoSa6');
  const MonCoSa7 = localStorage.getItem('MonCoSa7');
  const MonCoSa8 = localStorage.getItem('MonCoSa8');



  const FinishGo1 = localStorage.getItem('FinishGo1');
  const FinishGo2 = localStorage.getItem('FinishGo2');
  const FinishGo3 = localStorage.getItem('FinishGo3');
  const FinishGo4 = localStorage.getItem('FinishGo4');
  const FinishGo5 = localStorage.getItem('FinishGo5');
  const FinishGo6 = localStorage.getItem('FinishGo6');
  const FinishGo7 = localStorage.getItem('FinishGo7');
  const FinishGo8 = localStorage.getItem('FinishGo8');


  
  const [LesDra1,setLesDra1] = useState('');
  const [LesDra2,setLesDra2] = useState('');
  const [LesDra3,setLesDra3] = useState('');
  const [LesDra4,setLesDra4] = useState('');
  const [LesDra5,setLesDra5] = useState('');
  const [LesDra6,setLesDra6] = useState('');
  const [LesDra7,setLesDra7] = useState('');
  const [LesDra8,setLesDra8] = useState('');

  
  





  const [IncInCap1,setIncInCap1] = useState('');
  const [IncInCap2,setIncInCap2] = useState('');
  const [IncInCap3,setIncInCap3] = useState('');
  const [IncInCap4,setIncInCap4] = useState('');
  const [IncInCap5,setIncInCap5] = useState('');
  const [IncInCap6,setIncInCap6] = useState('');
  const [IncInCap7,setIncInCap7] = useState('');
  const [IncInCap8,setIncInCap8] = useState('');

  



  
  




  
  const ToAs1 = localStorage.getItem('ToAs1');
  const ToAs2 = localStorage.getItem('ToAs2');
  const ToAs3 = localStorage.getItem('ToAs3');
  const ToAs4 = localStorage.getItem('ToAs4');
  const ToAs5 = localStorage.getItem('ToAs5');
  const ToAs6 = localStorage.getItem('ToAs6');
  const ToAs7 = localStorage.getItem('ToAs7');
  const ToAs8 = localStorage.getItem('ToAs8');


  
  const ToIa1 = localStorage.getItem('ToIa1');
  const ToIa2 = localStorage.getItem('ToIa2');
  const ToIa3 = localStorage.getItem('ToIa3');
  const ToIa4 = localStorage.getItem('ToIa4');
  const ToIa5 = localStorage.getItem('ToIa5');
  const ToIa6 = localStorage.getItem('ToIa6');
  const ToIa7 = localStorage.getItem('ToIa7');
  const ToIa8 = localStorage.getItem('ToIa8');

  
  const ToCuAs1 = localStorage.getItem('ToCuAs1');
  const ToCuAs2 = localStorage.getItem('ToCuAs2');
  const ToCuAs3 = localStorage.getItem('ToCuAs3');
  const ToCuAs4 = localStorage.getItem('ToCuAs4');
  const ToCuAs5 = localStorage.getItem('ToCuAs5');
  const ToCuAs6 = localStorage.getItem('ToCuAs6');
  const ToCuAs7 = localStorage.getItem('ToCuAs7');
  const ToCuAs8 = localStorage.getItem('ToCuAs8');


  
  const ToNca1 = localStorage.getItem('ToNca1');
  const ToNca2 = localStorage.getItem('ToNca2');
  const ToNca3 = localStorage.getItem('ToNca3');
  const ToNca4 = localStorage.getItem('ToNca4');
  const ToNca5 = localStorage.getItem('ToNca5');
  const ToNca6 = localStorage.getItem('ToNca6');
  const ToNca7 = localStorage.getItem('ToNca7');
  const ToNca8 = localStorage.getItem('ToNca8');


  
  const NetFiAs1 = localStorage.getItem('NetFiAs1');
  const NetFiAs2 = localStorage.getItem('NetFiAs2');
  const NetFiAs3 = localStorage.getItem('NetFiAs3');
  const NetFiAs4 = localStorage.getItem('NetFiAs4');
  const NetFiAs5 = localStorage.getItem('NetFiAs5');
  const NetFiAs6 = localStorage.getItem('NetFiAs6');
  const NetFiAs7 = localStorage.getItem('NetFiAs7');
  const NetFiAs8 = localStorage.getItem('NetFiAs8');


  
  const ToLib1 = localStorage.getItem('ToLib1');
  const ToLib2 = localStorage.getItem('ToLib2');
  const ToLib3 = localStorage.getItem('ToLib3');
  const ToLib4 = localStorage.getItem('ToLib4');
  const ToLib5 = localStorage.getItem('ToLib5');
  const ToLib6 = localStorage.getItem('ToLib6');
  const ToLib7 = localStorage.getItem('ToLib7');
  const ToLib8 = localStorage.getItem('ToLib8');

  
  const ToCuLi1 = localStorage.getItem('ToCuLi1');
  const ToCuLi2 = localStorage.getItem('ToCuLi2');
  const ToCuLi3 = localStorage.getItem('ToCuLi3');
  const ToCuLi4 = localStorage.getItem('ToCuLi4');
  const ToCuLi5 = localStorage.getItem('ToCuLi5');
  const ToCuLi6 = localStorage.getItem('ToCuLi6');
  const ToCuLi7 = localStorage.getItem('ToCuLi7');
  const ToCuLi8 = localStorage.getItem('ToCuLi8');


  
  const LoTeLi1 = localStorage.getItem('LoTeLi1');
  const LoTeLi2 = localStorage.getItem('LoTeLi2');
  const LoTeLi3 = localStorage.getItem('LoTeLi3');
  const LoTeLi4 = localStorage.getItem('LoTeLi4');
  const LoTeLi5 = localStorage.getItem('LoTeLi5');
  const LoTeLi6 = localStorage.getItem('LoTeLi6');
  const LoTeLi7 = localStorage.getItem('LoTeLi7');
  const LoTeLi8 = localStorage.getItem('LoTeLi8');


  
  const NetWo1 = localStorage.getItem('NetWo1');
  const NetWo2 = localStorage.getItem('NetWo2');
  const NetWo3 = localStorage.getItem('NetWo3');
  const NetWo4 = localStorage.getItem('NetWo4');
  const NetWo5 = localStorage.getItem('NetWo5');
  const NetWo6 = localStorage.getItem('NetWo6');
  const NetWo7 = localStorage.getItem('NetWo7');
  const NetWo8 = localStorage.getItem('NetWo8');
  

  


  
  
  const GrFiAsTe1 = localStorage.getItem('GrFiAsTe1');
  const GrFiAsTe2 = localStorage.getItem('GrFiAsTe2');
  const GrFiAsTe3 = localStorage.getItem('GrFiAsTe3');
  const GrFiAsTe4 = localStorage.getItem('GrFiAsTe4');
  const GrFiAsTe5 = localStorage.getItem('GrFiAsTe5');
  const GrFiAsTe6 = localStorage.getItem('GrFiAsTe6');
  const GrFiAsTe7 = localStorage.getItem('GrFiAsTe7');
  const GrFiAsTe8 = localStorage.getItem('GrFiAsTe8');


  
  const FuDeTnw1 = localStorage.getItem('FuDeTnw1');
  const FuDeTnw2 = localStorage.getItem('FuDeTnw2');
  const FuDeTnw3 = localStorage.getItem('FuDeTnw3');
  const FuDeTnw4 = localStorage.getItem('FuDeTnw4');
  const FuDeTnw5 = localStorage.getItem('FuDeTnw5');
  const FuDeTnw6 = localStorage.getItem('FuDeTnw6');
  const FuDeTnw7 = localStorage.getItem('FuDeTnw7');
  const FuDeTnw8 = localStorage.getItem('FuDeTnw8');


  const ToTnQu1 = localStorage.getItem('ToTnQu1');
  const ToTnQu2 = localStorage.getItem('ToTnQu2');
  const ToTnQu3 = localStorage.getItem('ToTnQu3');
  const ToTnQu4 = localStorage.getItem('ToTnQu4');
  const ToTnQu5 = localStorage.getItem('ToTnQu5');
  const ToTnQu6 = localStorage.getItem('ToTnQu6');
  const ToTnQu7 = localStorage.getItem('ToTnQu7');
  const ToTnQu8 = localStorage.getItem('ToTnQu8');

  




  
  const ToTnAdj1 = localStorage.getItem('ToTnAdj1');
  const ToTnAdj2 = localStorage.getItem('ToTnAdj2');
  const ToTnAdj3 = localStorage.getItem('ToTnAdj3');
  const ToTnAdj4 = localStorage.getItem('ToTnAdj4');
  const ToTnAdj5 = localStorage.getItem('ToTnAdj5');
  const ToTnAdj6 = localStorage.getItem('ToTnAdj6');
  const ToTnAdj7 = localStorage.getItem('ToTnAdj7');
  const ToTnAdj8 = localStorage.getItem('ToTnAdj8');


  
  const TolTnw1 = localStorage.getItem('TolTnw1');
  const TolTnw2 = localStorage.getItem('TolTnw2');
  const TolTnw3 = localStorage.getItem('TolTnw3');
  const TolTnw4 = localStorage.getItem('TolTnw4');
  const TolTnw5 = localStorage.getItem('TolTnw5');
  const TolTnw6 = localStorage.getItem('TolTnw6');
  const TolTnw7 = localStorage.getItem('TolTnw7');
  const TolTnw8 = localStorage.getItem('TolTnw8');


  
  const TwQuEq1 = localStorage.getItem('TwQuEq1');
  const TwQuEq2 = localStorage.getItem('TwQuEq2');
  const TwQuEq3 = localStorage.getItem('TwQuEq3');
  const TwQuEq4 = localStorage.getItem('TwQuEq4');
  const TwQuEq5 = localStorage.getItem('TwQuEq5');
  const TwQuEq6 = localStorage.getItem('TwQuEq6');
  const TwQuEq7 = localStorage.getItem('TwQuEq7');
  const TwQuEq8 = localStorage.getItem('TwQuEq7');


  
  const TaNeWo1 = localStorage.getItem('TaNeWo1');
  const TaNeWo2 = localStorage.getItem('TaNeWo2');
  const TaNeWo3 = localStorage.getItem('TaNeWo3');
  const TaNeWo4 = localStorage.getItem('TaNeWo4');
  const TaNeWo5 = localStorage.getItem('TaNeWo5');
  const TaNeWo6 = localStorage.getItem('TaNeWo6');
  const TaNeWo7 = localStorage.getItem('TaNeWo7');
  const TaNeWo8 = localStorage.getItem('TaNeWo8');

  
  const CuRa1 = localStorage.getItem('CuRa1');
  const CuRa2 = localStorage.getItem('CuRa2');
  const CuRa3 = localStorage.getItem('CuRa3');
  const CuRa4 = localStorage.getItem('CuRa4');
  const CuRa5 = localStorage.getItem('CuRa5');
  const CuRa6 = localStorage.getItem('CuRa6');
  const CuRa7 = localStorage.getItem('CuRa7');
  const CuRa8 = localStorage.getItem('CuRa8');


  
  const NewoCa1 = localStorage.getItem('NewoCa1');
  const NewoCa2 = localStorage.getItem('NewoCa2');
  const NewoCa3 = localStorage.getItem('NewoCa3');
  const NewoCa4 = localStorage.getItem('NewoCa4');
  const NewoCa5 = localStorage.getItem('NewoCa5');
  const NewoCa6 = localStorage.getItem('NewoCa6');
  const NewoCa7 = localStorage.getItem('NewoCa7');
  const NewoCa8 = localStorage.getItem('NewoCa8');



  
  const NeCaAcc1 = localStorage.getItem('NeCaAcc1');
  const NeCaAcc2 = localStorage.getItem('NeCaAcc2');
  const NeCaAcc3 = localStorage.getItem('NeCaAcc3');
  const NeCaAcc4 = localStorage.getItem('NeCaAcc4');
  const NeCaAcc5 = localStorage.getItem('NeCaAcc5');
  const NeCaAcc6 = localStorage.getItem('NeCaAcc6');
  const NeCaAcc7 = localStorage.getItem('NeCaAcc7');
  const NeCaAcc8 = localStorage.getItem('NeCaAcc8');


    
  const NePrafTa1 = localStorage.getItem('NePrafTa1');
  const NePrafTa2 = localStorage.getItem('NePrafTa2');
  const NePrafTa3 = localStorage.getItem('NePrafTa3');
  const NePrafTa4 = localStorage.getItem('NePrafTa4');
  const NePrafTa5 = localStorage.getItem('NePrafTa5');
  const NePrafTa6 = localStorage.getItem('NePrafTa6');
  const NePrafTa7 = localStorage.getItem('NePrafTa7');
  const NePrafTa8 = localStorage.getItem('NePrafTa8');


  
  const opProLo1 = localStorage.getItem('opProLo1')
  const opProLo2 = localStorage.getItem('opProLo2')
  const opProLo3 = localStorage.getItem('opProLo3')
  const opProLo4 = localStorage.getItem('opProLo4')
  const opProLo5 = localStorage.getItem('opProLo5')
  const opProLo6 = localStorage.getItem('opProLo6')
  const opProLo7 = localStorage.getItem('opProLo7')
  const opProLo8 = localStorage.getItem('opProLo8')


  
  const OpCoSa1 = localStorage.getItem('OpCoSa1')
  const OpCoSa2 = localStorage.getItem('OpCoSa2')
  const OpCoSa3 = localStorage.getItem('OpCoSa3')
  const OpCoSa4 = localStorage.getItem('OpCoSa4')
  const OpCoSa5 = localStorage.getItem('OpCoSa5')
  const OpCoSa6 = localStorage.getItem('OpCoSa6')
  const OpCoSa7 = localStorage.getItem('OpCoSa7')
  const OpCoSa8 = localStorage.getItem('OpCoSa8')



  const NetSal1 = localStorage.getItem('display')
  const NetSal2 = localStorage.getItem('display1')
  const NetSal3= localStorage.getItem('display2')
  const NetSal4 = localStorage.getItem('display3')
  const NetSal5 = localStorage.getItem('display4')
  const NetSal6 = localStorage.getItem('display5')
  const NetSal7 = localStorage.getItem('display6')
  const NetSal8 = localStorage.getItem('display7')


  const valIncInCap1 = () => {
    try {
  
      
        const result =  ({TaNeWo1} + {NePrafTa1} -  {TaNeWo1})  < 0 ? -1*  ({TaNeWo1} + {NePrafTa1} -  {TaNeWo1}) : "0";
      setIncInCap1(result);
    } catch (error) {
      setIncInCap1(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap1();
  }, [TaNeWo1,NePrafTa1,TaNeWo1]);

  const valIncInCap2 = () => {
    try {
  
      
        const result =  ({TaNeWo2} + {NePrafTa2} -  {TaNeWo2})  < 0 ? -2*  ({TaNeWo2} + {NePrafTa2} -  {TaNeWo2}) : "0";
      setIncInCap2(result);
    } catch (error) {
      setIncInCap2(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap2();
  }, [TaNeWo2,NePrafTa2,TaNeWo2]);
  const valIncInCap3 = () => {
    try {
  
      
        const result =  ({TaNeWo3} + {NePrafTa3} -  {TaNeWo3})  < 0 ? -3*  ({TaNeWo3} + {NePrafTa3} -  {TaNeWo3}) : "0";
      setIncInCap3(result);
    } catch (error) {
      setIncInCap3(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap3();
  }, [TaNeWo3,NePrafTa3,TaNeWo3]);

  const valIncInCap4 = () => {
    try {
  
      
        const result =  ({TaNeWo4} + {NePrafTa4} -  {TaNeWo4})  < 0 ? -4*  ({TaNeWo4} + {NePrafTa4} -  {TaNeWo4}) : "0";
      setIncInCap4(result);
    } catch (error) {
      setIncInCap4(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap4();
  }, [TaNeWo4,NePrafTa4,TaNeWo4]);

  const valIncInCap5 = () => {
    try {
  
      
        const result =  ({TaNeWo5} + {NePrafTa5} -  {TaNeWo5})  < 0 ? -5*  ({TaNeWo5} + {NePrafTa5} -  {TaNeWo5}) : "0";
      setIncInCap5(result);
    } catch (error) {
      setIncInCap5(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap5();
  }, [TaNeWo5,NePrafTa5,TaNeWo5]);

  const valIncInCap6 = () => {
    try {
  
      
        const result =  ({TaNeWo6} + {NePrafTa6} -  {TaNeWo6})  < 0 ? -6*  ({TaNeWo6} + {NePrafTa6} -  {TaNeWo6}) : "0";
      setIncInCap6(result);
    } catch (error) {
      setIncInCap6(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap6();
  }, [TaNeWo6,NePrafTa6,TaNeWo6]);

  const valIncInCap7 = () => {
    try {
  
      
        const result =  ({TaNeWo7} + {NePrafTa7} -  {TaNeWo7})  < 0 ? -7*  ({TaNeWo7} + {NePrafTa7} -  {TaNeWo7}) : "0";
      setIncInCap7(result);
    } catch (error) {
      setIncInCap7(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap7();
  }, [TaNeWo7,NePrafTa7,TaNeWo7]);

  const valIncInCap8 = () => {
    try {
  
      
        const result =  ({TaNeWo8} + {NePrafTa8} -  {TaNeWo8})  < 0 ? -8*  ({TaNeWo8} + {NePrafTa8} -  {TaNeWo8}) : "0";
      setIncInCap8(result);
    } catch (error) {
      setIncInCap8(" "); 
    }
  };
  
  useEffect(() => {
    valIncInCap8();
  }, [TaNeWo8,NePrafTa8,TaNeWo8]);



  const valLesDra1 = () => {
    try {
  
      
        const result =  ({TaNeWo1} + {NePrafTa1} -  {TaNeWo1})  > 0 ?  ({TaNeWo1} + {NePrafTa1} -  {TaNeWo1}) : "0";
      setLesDra1(result);
    } catch (error) {
      setLesDra1(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra1();
  }, [TaNeWo1,NePrafTa1,TaNeWo1]);

  const valLesDra2 = () => {
    try {
  
      
        const result =  ({TaNeWo2} + {NePrafTa2} -  {TaNeWo2})  > 0 ?  ({TaNeWo2} + {NePrafTa2} -  {TaNeWo2}) : "0";
      setLesDra2(result);
    } catch (error) {
      setLesDra2(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra2();
  }, [TaNeWo2,NePrafTa2,TaNeWo2]);

  const valLesDra3 = () => {
    try {
  
      
        const result =  ({TaNeWo3} + {NePrafTa3} -  {TaNeWo3})  > 0 ?  ({TaNeWo3} + {NePrafTa3} -  {TaNeWo3}) : "0";
      setLesDra3(result);
    } catch (error) {
      setLesDra3(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra3();
  }, [TaNeWo3,NePrafTa3,TaNeWo3]);

  const valLesDra4 = () => {
    try {
  
      
        const result =  ({TaNeWo4} + {NePrafTa4} -  {TaNeWo4})  > 0 ?  ({TaNeWo4} + {NePrafTa4} -  {TaNeWo4}) : "0";
      setLesDra4(result);
    } catch (error) {
      setLesDra4(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra4();
  }, [TaNeWo4,NePrafTa4,TaNeWo4]);

  const valLesDra5 = () => {
    try {
  
      
        const result =  ({TaNeWo5} + {NePrafTa5} -  {TaNeWo5})  > 0 ?  ({TaNeWo5} + {NePrafTa5} -  {TaNeWo5}) : "0";
      setLesDra5(result);
    } catch (error) {
      setLesDra5(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra5();
  }, [TaNeWo5,NePrafTa5,TaNeWo5]);

  const valLesDra6 = () => {
    try {
  
      
        const result =  ({TaNeWo6} + {NePrafTa6} -  {TaNeWo6})  > 0 ?  ({TaNeWo6} + {NePrafTa6} -  {TaNeWo6}) : "0";
      setLesDra6(result);
    } catch (error) {
      setLesDra6(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra6();
  }, [TaNeWo6,NePrafTa6,TaNeWo6]);

  const valLesDra7 = () => {
    try {
  
      
        const result =  ({TaNeWo7} + {NePrafTa7} -  {TaNeWo7})  > 0 ?  ({TaNeWo7} + {NePrafTa7} -  {TaNeWo7}) : "0";
      setLesDra7(result);
    } catch (error) {
      setLesDra7(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra7();
  }, [TaNeWo7,NePrafTa7,TaNeWo7]);

  const valLesDra8 = () => {
    try {
  
      
        const result =  ({TaNeWo8} + {NePrafTa8} -  {TaNeWo8})  > 0 ?  ({TaNeWo8} + {NePrafTa8} -  {TaNeWo8}) : "0";
      setLesDra8(result);
    } catch (error) {
      setLesDra8(" "); 
    }
  };
  
  useEffect(() => {
    valLesDra8();
  }, [TaNeWo8,NePrafTa8,TaNeWo8]);


  const NetSaltf1 = NetSal1 *0.25;
  const NetSaltf2 = NetSal2 *0.25;
  const NetSaltf3 = NetSal3 *0.25;
  const NetSaltf4 = NetSal4 *0.25;
  const NetSaltf5 = NetSal5 *0.25;
  const NetSaltf6 = NetSal6 *0.25;
  const NetSaltf7 = NetSal7 *0.25;
  const NetSaltf8 = NetSal8 *0.25;

  
  const NetSalfi1 = NetSal1 *0.05;
  const NetSalfi2 = NetSal2 *0.05;
  const NetSalfi3 = NetSal3 *0.05;
  const NetSalfi4 = NetSal4 *0.05;
  const NetSalfi5 = NetSal5 *0.05;
  const NetSalfi6 = NetSal6 *0.05;
  const NetSalfi7 = NetSal7 *0.05;
  const NetSalfi8 = NetSal8 *0.05;

  const ElBaBo1 = NetSaltf1 - NetSalfi1;
  const ElBaBo2 = NetSaltf2 - NetSalfi2;
const ElBaBo3 = NetSaltf3 - NetSalfi3;
const ElBaBo4 = NetSaltf4 - NetSalfi4;
const ElBaBo5 = NetSaltf5 - NetSalfi5;
const ElBaBo6 = NetSaltf6 - NetSalfi6;
const ElBaBo7 = NetSaltf7 - NetSalfi7;
const ElBaBo8 = NetSaltf8 - NetSalfi8;


const PaiSto1 = TotInv1 - SunCrTr1;
const PaiSto2 = TotInv2 - SunCrTr2;
const PaiSto3 = TotInv3 - SunCrTr3;
const PaiSto4 = TotInv4 - SunCrTr4;
const PaiSto5 = TotInv5 - SunCrTr5;
const PaiSto6 = TotInv6 - SunCrTr6;
const PaiSto7 = TotInv7 - SunCrTr7;
const PaiSto8 = TotInv8 - SunCrTr8;


const MargTf1 = PaiSto1 *0.25;
const MargTf2 = PaiSto2 *0.25;
const MargTf3 = PaiSto3 *0.25;
const MargTf4 = PaiSto4 *0.25;
const MargTf5 = PaiSto5 *0.25;
const MargTf6 = PaiSto6 *0.25;
const MargTf7 = PaiSto7 *0.25;
const MargTf8 = PaiSto8 *0.25;






const valDraPow1 = () => {
  try {

    
      const result =  ({PaiSto1} - {MargTf1})  < 1 ? 0 : ({PaiSto1} - {MargTf1}) ;
    setDraPow1(result);
  } catch (error) {
    setDraPow1(" "); 
  }
};

useEffect(() => {
  valDraPow1();
}, [PaiSto1,MargTf1]);

const valDraPow2 = () => {
  try {

    
      const result =  ({PaiSto2} - {MargTf2})  < 2 ? 0 : ({PaiSto2} - {MargTf2}) ;
    setDraPow2(result);
  } catch (error) {
    setDraPow2(" "); 
  }
};

useEffect(() => {
  valDraPow2();
}, [PaiSto2,MargTf2]);


const valDraPow3 = () => {
  try {

    
      const result =  ({PaiSto3} - {MargTf3})  < 3 ? 0 : ({PaiSto3} - {MargTf3}) ;
    setDraPow3(result);
  } catch (error) {
    setDraPow3(" "); 
  }
};

useEffect(() => {
  valDraPow3();
}, [PaiSto3,MargTf3]);


const valDraPow4 = () => {
  try {

    
      const result =  ({PaiSto4} - {MargTf4})  < 4 ? 0 : ({PaiSto4} - {MargTf4}) ;
    setDraPow4(result);
  } catch (error) {
    setDraPow4(" "); 
  }
};

useEffect(() => {
  valDraPow4();
}, [PaiSto4,MargTf4]);


const valDraPow5 = () => {
  try {

    
      const result =  ({PaiSto5} - {MargTf5})  < 5 ? 0 : ({PaiSto5} - {MargTf5}) ;
    setDraPow5(result);
  } catch (error) {
    setDraPow5(" "); 
  }
};

useEffect(() => {
  valDraPow5();
}, [PaiSto5,MargTf5]);


const valDraPow6 = () => {
  try {

    
      const result =  ({PaiSto6} - {MargTf6})  < 6 ? 0 : ({PaiSto6} - {MargTf6}) ;
    setDraPow6(result);
  } catch (error) {
    setDraPow6(" "); 
  }
};

useEffect(() => {
  valDraPow6();
}, [PaiSto6,MargTf6]);


const valDraPow7 = () => {
  try {

    
      const result =  ({PaiSto7} - {MargTf7})  < 7 ? 0 : ({PaiSto7} - {MargTf7}) ;
    setDraPow7(result);
  } catch (error) {
    setDraPow7(" "); 
  }
};

useEffect(() => {
  valDraPow7();
}, [PaiSto7,MargTf7]);


const valDraPow8 = () => {
  try {

    
      const result =  ({PaiSto8} - {MargTf8})  < 8 ? 0 : ({PaiSto8} - {MargTf8}) ;
    setDraPow8(result);
  } catch (error) {
    setDraPow8(" "); 
  }
};

useEffect(() => {
  valDraPow8();
}, [PaiSto8,MargTf8]);


const Marfty1 = Reci1 * 0.5;
const Marfty2 = Reci2 * 0.5;
const Marfty3 = Reci3 * 0.5;
const Marfty4 = Reci4 * 0.5;
const Marfty5 = Reci5 * 0.5;
const Marfty6 = Reci6 * 0.5;
const Marfty7 = Reci7 * 0.5;
const Marfty8 = Reci8 * 0.5;


const valDrPowe1 = () => {
  try {

    
      const result =  ({Reci1} - {Marfty1})  < 1 ? 0 : ({Reci1} - {Marfty1}) ;
    setDrPowe1(result);
  } catch (error) {
    setDrPowe1(" "); 
  }
};

useEffect(() => {
  valDrPowe1();
}, [Reci1,Marfty1]);
const valDrPowe2 = () => {
  try {

    
      const result =  ({Reci2} - {Marfty2})  < 2 ? 0 : ({Reci2} - {Marfty2}) ;
    setDrPowe2(result);
  } catch (error) {
    setDrPowe2(" "); 
  }
};

useEffect(() => {
  valDrPowe2();
}, [Reci2,Marfty2]);

const valDrPowe3 = () => {
  try {

    
      const result =  ({Reci3} - {Marfty3})  < 3 ? 0 : ({Reci3} - {Marfty3}) ;
    setDrPowe3(result);
  } catch (error) {
    setDrPowe3(" "); 
  }
};

useEffect(() => {
  valDrPowe3();
}, [Reci3,Marfty3]);

const valDrPowe4 = () => {
  try {

    
      const result =  ({Reci4} - {Marfty4})  < 4 ? 0 : ({Reci4} - {Marfty4}) ;
    setDrPowe4(result);
  } catch (error) {
    setDrPowe4(" "); 
  }
};

useEffect(() => {
  valDrPowe4();
}, [Reci4,Marfty4]);

const valDrPowe5 = () => {
  try {

    
      const result =  ({Reci5} - {Marfty5})  < 5 ? 0 : ({Reci5} - {Marfty5}) ;
    setDrPowe5(result);
  } catch (error) {
    setDrPowe5(" "); 
  }
};

useEffect(() => {
  valDrPowe5();
}, [Reci5,Marfty5]);

const valDrPowe6 = () => {
  try {

    
      const result =  ({Reci6} - {Marfty6})  < 6 ? 0 : ({Reci6} - {Marfty6}) ;
    setDrPowe6(result);
  } catch (error) {
    setDrPowe6(" "); 
  }
};

useEffect(() => {
  valDrPowe6();
}, [Reci6,Marfty6]);

const valDrPowe7 = () => {
  try {

    
      const result =  ({Reci7} - {Marfty7})  < 7 ? 0 : ({Reci7} - {Marfty7}) ;
    setDrPowe7(result);
  } catch (error) {
    setDrPowe7(" "); 
  }
};

useEffect(() => {
  valDrPowe7();
}, [Reci7,Marfty7]);

const valDrPowe8 = () => {
  try {

    
      const result =  ({Reci8} - {Marfty8})  < 8 ? 0 : ({Reci8} - {Marfty8}) ;
    setDrPowe8(result);
  } catch (error) {
    setDrPowe8(" "); 
  }
};

useEffect(() => {
  valDrPowe8();
}, [Reci8,Marfty8]);



const ToElLi1 = DraPow1 + DrPowe1;
const ToElLi2 = DraPow2 + DrPowe2;
const ToElLi3 = DraPow3 + DrPowe3;
const ToElLi4 = DraPow4 + DrPowe4;
const ToElLi5 = DraPow5 + DrPowe5;
const ToElLi6 = DraPow6 + DrPowe6;
const ToElLi7 = DraPow7 + DrPowe7;
const ToElLi8 = DraPow8 + DrPowe8;



















































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
              KEY FINANCIAL INDICATORS
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

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
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
              { NetSal3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal8} 
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
              { OpCoSa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {OpCoSa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { OpCoSa8} 
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
              { opProLo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { opProLo6} 
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
              Net Profit  After Tax
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NePrafTa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa6} 
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
              Cash accruals
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NeCaAcc2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NeCaAcc6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NeCaAcc8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Working Capital
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NewoCa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa8} 
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
              { CuRa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { CuRa4} 
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
              { CuRa8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { TaNeWo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW ( Adjusted)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TwQuEq1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { TwQuEq2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TwQuEq3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TwQuEq4} 
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
              TOL / TNW
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TolTnw2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TolTnw7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TolTnw8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL / TNW (Adjusted) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToTnAdj2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnAdj3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnAdj4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnAdj5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnAdj6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnAdj7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnAdj8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL / TNW ( Quasi Equity) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToTnQu1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToTnQu2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToTnQu8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Funded Debt  / TNW
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FuDeTnw1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { FuDeTnw2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FuDeTnw8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Gross Fixed Asset/Term Loan
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { GrFiAsTe2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { GrFiAsTe8} 
            </Col>
          </Row>

          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              ABRIDGED FINANCIAL 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row  >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              LIABILITIES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Capital & Reserves
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NetWo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetWo8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               Long Term Liabilities
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { LoTeLi2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LoTeLi8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Current Liabilities
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToCuLi2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuLi3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuLi4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuLi5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuLi8} 
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL LIABILITIES 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToLib2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToLib8} 
            </Col>
          </Row>

          <Row  >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              ASSETS      
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fixed Assets 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NetFiAs2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetFiAs7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Non Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToNca2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToNca8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Current Assets 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToCuAs2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToCuAs8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Intangible Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToIa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToIa8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL ASSETS 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToAs2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToAs8} 
            </Col>
          </Row>


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               II   MOVEMENT OF  T N W 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW  Opening Balance
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
             
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { TaNeWo1} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo2} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo7} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              ADD Profit / Loss After Tax
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NePrafTa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NePrafTa7} 
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
              Increase in Capital 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { IncInCap1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { IncInCap2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { IncInCap3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncInCap4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { IncInCap5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInCap6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInCap7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IncInCap8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Less Drawings 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LesDra1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { LesDra2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LesDra3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LesDra4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LesDra5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LesDra6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LesDra7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { LesDra8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Closing Balance 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { TaNeWo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TaNeWo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TaNeWo8} 
            </Col>
          </Row>


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               III   INVENTORY HOLDINGS 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              FINISHED GOODS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { FinishGo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { FinishGo8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's cost of sales)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MonCoSa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonCoSa6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { MonCoSa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonCoSa8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              RECEIVABLES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Reci1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { Reci2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Reci3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's gross sales)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { MonGrSa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonGrSa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonGrSa6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { MonGrSa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonGrSa8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TRADE  CREDITORS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { SunCrTr2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's purchases)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { MonPur2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MonPur8} 
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               IV  NAYAK  COMMITTEE
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NetSal2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NetSal8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              25% of Net Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            {NetSaltf2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf6}
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSaltf8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Less 5% Margin
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
           {NetSalfi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            {NetSalfi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi6}
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSalfi8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Eligible Bank Borrowings
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ElBaBo2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ElBaBo8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Estimated NWC ( WC Margin)
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
              { NewoCa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NewoCa6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { NewoCa8} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NWC  SHORTFALL
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>


          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               V  STRUCTURING  OF  LIMITS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Stock Value
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TotInv2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TotInv4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TotInv5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TotInv6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { TotInv7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { TotInv8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Sundry Creditors
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { SunCrTr2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { SunCrTr8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Paid Stock
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PaiSto1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {PaiSto2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {PaiSto3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PaiSto4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PaiSto5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { PaiSto6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { PaiSto7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {PaiSto8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Margin 25%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { MargTf1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { MargTf2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { MargTf3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MargTf4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MargTf5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MargTf6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              {MargTf7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { MargTf8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Drawing Power
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DraPow2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { DraPow5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DraPow8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Book Debts
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Reci1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { Reci2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Reci3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Reci8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Margin 50%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Marfty1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { Marfty2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { Marfty3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { Marfty4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marfty5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marfty6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { Marfty7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marfty8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Drawing Power
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { DrPowe2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DrPowe3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { DrPowe8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Total Eligible Limit
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToElLi1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { ToElLi2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToElLi3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToElLi4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToElLi5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToElLi6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { ToElLi7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { ToElLi8} 
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Bank Outstanding
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { BanOut2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut6} 
            </Col>

            
            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { BanOut8} 
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

export default KfI
