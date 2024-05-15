import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WctLassmt = () => {

  
const [GrFiAsTe1,setGrFiAsTe1] = useState('');
const [GrFiAsTe2,setGrFiAsTe2] = useState('');
const [GrFiAsTe3,setGrFiAsTe3] = useState('');
const [GrFiAsTe4,setGrFiAsTe4] = useState('');
const [GrFiAsTe5,setGrFiAsTe5] = useState('');
const [GrFiAsTe6,setGrFiAsTe6] = useState('');
const [GrFiAsTe7,setGrFiAsTe7] = useState('');
const [GrFiAsTe8,setGrFiAsTe8] = useState('');




useEffect(() => {
  localStorage.setItem("GrFiAsTe1", GrFiAsTe1);
}, [GrFiAsTe1]);
useEffect(() => {
  localStorage.setItem("GrFiAsTe2", GrFiAsTe2);
}, [GrFiAsTe2]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe3", GrFiAsTe3);
}, [GrFiAsTe3]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe4", GrFiAsTe4);
}, [GrFiAsTe4]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe5", GrFiAsTe5);
}, [GrFiAsTe5]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe6", GrFiAsTe6);
}, [GrFiAsTe6]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe7", GrFiAsTe7);
}, [GrFiAsTe7]);

useEffect(() => {
  localStorage.setItem("GrFiAsTe8", GrFiAsTe8);
}, [GrFiAsTe8]);











const [Diff1,setDiff1] = useState('');
const [Diff2,setDiff2] = useState('');
const [Diff3,setDiff3] = useState('');
const [Diff4,setDiff4] = useState('');
const [Diff5,setDiff5] = useState('');
const [Diff6,setDiff6] = useState('');
const [Diff7,setDiff7] = useState('');
const [Diff8,setDiff8] = useState('');






  

const [FiAsCoRa1,setFiAsCoRa1] = useState('');
const [FiAsCoRa2,setFiAsCoRa2] = useState('');
const [FiAsCoRa3,setFiAsCoRa3] = useState('');
const [FiAsCoRa4,setFiAsCoRa4] = useState('');
const [FiAsCoRa5,setFiAsCoRa5] = useState('');
const [FiAsCoRa6,setFiAsCoRa6] = useState('');
const [FiAsCoRa7,setFiAsCoRa7] = useState('');
const [FiAsCoRa8,setFiAsCoRa8] = useState('');

const [IfCaAc1,setIfCaAc1] = useState('');
const [IfCaAc2,setIfCaAc2] = useState('');
const [IfCaAc3,setIfCaAc3] = useState('');
const [IfCaAc4,setIfCaAc4] = useState('');
const [IfCaAc5,setIfCaAc5] = useState('');
const [IfCaAc6,setIfCaAc6] = useState('');
const [IfCaAc7,setIfCaAc7] = useState('');
const [IfCaAc8,setIfCaAc8] = useState('');















const [SecMar1,setSecMar1] = useState('');
const [SecMar2,setSecMar2] = useState('');
const [SecMar3,setSecMar3] = useState('');
const [SecMar4,setSecMar4] = useState('');
const [SecMar5,setSecMar5] = useState('');
const [SecMar6,setSecMar6] = useState('');
const [SecMar7,setSecMar7] = useState('');
const [SecMar8,setSecMar8] = useState('');




  
const [Marg1,setMarg1] = useState('');
const [Marg2,setMarg2] = useState('');
const [Marg3,setMarg3] = useState('');
const [Marg4,setMarg4] = useState('');
const [Marg5,setMarg5] = useState('');
const [Marg6,setMarg6] = useState('');
const [Marg7,setMarg7] = useState('');
const [Marg8,setMarg8] = useState('');










const [TlInst1,setTlInst1] = useState('');
const [TlInst2,setTlInst2] = useState('');
const [TlInst3,setTlInst3] = useState('');
const [TlInst4,setTlInst4] = useState('');
const [TlInst5,setTlInst5] = useState('');
const [TlInst6,setTlInst6] = useState('');
const [TlInst7,setTlInst7] = useState('');
const [TlInst8,setTlInst8] = useState('');

  
  const TeLoIn1 = localStorage.getItem('TeLoIn1');
  const TeLoIn2 = localStorage.getItem('TeLoIn2');
  const TeLoIn3 = localStorage.getItem('TeLoIn3');
  const TeLoIn4 = localStorage.getItem('TeLoIn4');
  const TeLoIn5 = localStorage.getItem('TeLoIn5');
  const TeLoIn6 = localStorage.getItem('TeLoIn6');
  const TeLoIn7 = localStorage.getItem('TeLoIn7');
  const TeLoIn8 = localStorage.getItem('TeLoIn8');


  
  const TeLoIo1 = localStorage.getItem('TeLoIo1');
  const TeLoIo2 = localStorage.getItem('TeLoIo2');
  const TeLoIo3 = localStorage.getItem('TeLoIo3');
  const TeLoIo4 = localStorage.getItem('TeLoIo4');
  const TeLoIo5 = localStorage.getItem('TeLoIo5');
  const TeLoIo6 = localStorage.getItem('TeLoIo6');
  const TeLoIo7 = localStorage.getItem('TeLoIo7');
  const TeLoIo8 = localStorage.getItem('TeLoIo8');


  
  const [TerLoa1,setTerLoa1] = useState('');
  const [TerLoa2,setTerLoa2] = useState('');
  const [TerLoa3,setTerLoa3] = useState('');
  const [TerLoa4,setTerLoa4] = useState('');
  const [TerLoa5,setTerLoa5] = useState('');
  const [TerLoa6,setTerLoa6] = useState('');
  const [TerLoa7,setTerLoa7] = useState('');
  const [TerLoa8,setTerLoa8] = useState('');


  const sumTerLoa1 = () => {
    try {
     
      const result = eval(`  (${TeLoIo1 || 0} + ${TeLoIo1 || 0})  + ${TlInst1 || 0}) `);
      setTerLoa1(result);
    } catch (error) {
      setTerLoa1("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa1();
  }, [TeLoIo1,TeLoIo1,TlInst1]);

  const sumTerLoa2 = () => {
    try {
     
      const result = eval(`  (${TeLoIo2 || 0} + ${TeLoIo2 || 0})  + ${TlInst2 || 0}) `);
      setTerLoa2(result);
    } catch (error) {
      setTerLoa2("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa2();
  }, [TeLoIo2,TeLoIo2,TlInst2]);

  const sumTerLoa3 = () => {
    try {
     
      const result = eval(`  (${TeLoIo3 || 0} + ${TeLoIo3 || 0})  + ${TlInst3 || 0}) `);
      setTerLoa3(result);
    } catch (error) {
      setTerLoa3("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa3();
  }, [TeLoIo3,TeLoIo3,TlInst3]);

  const sumTerLoa4 = () => {
    try {
     
      const result = eval(`  (${TeLoIo4 || 0} + ${TeLoIo4 || 0})  + ${TlInst4 || 0}) `);
      setTerLoa4(result);
    } catch (error) {
      setTerLoa4("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa4();
  }, [TeLoIo4,TeLoIo4,TlInst4]);

  const sumTerLoa5 = () => {
    try {
     
      const result = eval(`  (${TeLoIo5 || 0} + ${TeLoIo5 || 0})  + ${TlInst5 || 0}) `);
      setTerLoa5(result);
    } catch (error) {
      setTerLoa5("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa5();
  }, [TeLoIo5,TeLoIo5,TlInst5]);

  const sumTerLoa6 = () => {
    try {
     
      const result = eval(`  (${TeLoIo6 || 0} + ${TeLoIo6 || 0})  + ${TlInst6 || 0}) `);
      setTerLoa6(result);
    } catch (error) {
      setTerLoa6("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa6();
  }, [TeLoIo6,TeLoIo6,TlInst6]);

  const sumTerLoa7 = () => {
    try {
     
      const result = eval(`  (${TeLoIo7 || 0} + ${TeLoIo7 || 0})  + ${TlInst7 || 0}) `);
      setTerLoa7(result);
    } catch (error) {
      setTerLoa7("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa7();
  }, [TeLoIo7,TeLoIo7,TlInst7]);

  const sumTerLoa8 = () => {
    try {
     
      const result = eval(`  (${TeLoIo8 || 0} + ${TeLoIo8 || 0})  + ${TlInst8 || 0}) `);
      setTerLoa8(result);
    } catch (error) {
      setTerLoa8("Input all ");  
    }
  };
  
  useEffect(() => {
    sumTerLoa8();
  }, [TeLoIo8,TeLoIo8,TlInst8]);












  
  const NetFiAs1   = localStorage.getItem('NetFiAs1');
  const NetFiAs2   = localStorage.getItem('NetFiAs2');
  const NetFiAs3   = localStorage.getItem('NetFiAs3');
  const NetFiAs4   = localStorage.getItem('NetFiAs4');
  const NetFiAs5   = localStorage.getItem('NetFiAs5');
  const NetFiAs6   = localStorage.getItem('NetFiAs6');
  const NetFiAs7   = localStorage.getItem('NetFiAs7');
  const NetFiAs8   = localStorage.getItem('NetFiAs8');



  
  const GroBlo1 = localStorage.getItem('GroBlo1');
  const GroBlo2 = localStorage.getItem('GroBlo2');
  const GroBlo3 = localStorage.getItem('GroBlo3');
  const GroBlo4 = localStorage.getItem('GroBlo4');
  const GroBlo5 = localStorage.getItem('GroBlo5');
  const GroBlo6 = localStorage.getItem('GroBlo6');
  const GroBlo7 = localStorage.getItem('GroBlo7');
  const GroBlo8 = localStorage.getItem('GroBlo8');



  
  const [ShInNwc1,setShInNwc1] = useState('');
  const [ShInNwc2,setShInNwc2] = useState('');
  const [ShInNwc3,setShInNwc3] = useState('');
  const [ShInNwc4,setShInNwc4] = useState('');
  const [ShInNwc5,setShInNwc5] = useState('');
  const [ShInNwc6,setShInNwc6] = useState('');
  const [ShInNwc7,setShInNwc7] = useState('');
  const [ShInNwc8,setShInNwc8] = useState('');




  
  const [MpBf1,setMpBf1] = useState('');
  const [MpBf2,setMpBf2] = useState('');
  const [MpBf3,setMpBf3] = useState('');
  const [MpBf4,setMpBf4] = useState('');
  const [MpBf5,setMpBf5] = useState('');
  const [MpBf6,setMpBf6] = useState('');
  const [MpBf7,setMpBf7] = useState('');
  const [MpBf8,setMpBf8] = useState('');





  
  const [aCii1,setaCii1] = useState('');
  const [aCii2,setaCii2] = useState('');
  const [aCii3,setaCii3] = useState('');
  const [aCii4,setaCii4] = useState('');
  const [aCii5,setaCii5] = useState('');
  const [aCii6,setaCii6] = useState('');
  const [aCii7,setaCii7] = useState('');
  const [aCii8,setaCii8] = useState('');






  
  const [aBi1,setaBi1] = useState('');
  const [aBi2,setaBi2] = useState('');
  const [aBi3,setaBi3] = useState('');
  const [aBi4,setaBi4] = useState('');
  const [aBi5,setaBi5] = useState('');
  const [aBi6,setaBi6] = useState('');
  const [aBi7,setaBi7] = useState('');
  const [aBi8,setaBi8] = useState('');

  





  
  const NewoCa1 = localStorage.getItem('NewoCa1');
  const NewoCa2 = localStorage.getItem('NewoCa2');
  const NewoCa3 = localStorage.getItem('NewoCa3');
  const NewoCa4 = localStorage.getItem('NewoCa4');
  const NewoCa5 = localStorage.getItem('NewoCa5');
  const NewoCa6 = localStorage.getItem('NewoCa6');
  const NewoCa7 = localStorage.getItem('NewoCa7');
  const NewoCa8 = localStorage.getItem('NewoCa8');


  
  const [margCAB1,setmargCAB1] = useState('');
  const [margCAB2,setmargCAB2] = useState('');
  const [margCAB3,setmargCAB3] = useState('');
  const [margCAB4,setmargCAB4] = useState('');
  const [margCAB5,setmargCAB5] = useState('');
  const [margCAB6,setmargCAB6] = useState('');
  const [margCAB7,setmargCAB7] = useState('');
  const [margCAB8,setmargCAB8] = useState('');

  



  
  const [WorCap1,setWorCap1] = useState('');
  const [WorCap2,setWorCap2] = useState('');
  const [WorCap3,setWorCap3] = useState('');
  const [WorCap4,setWorCap4] = useState('');
  const [WorCap5,setWorCap5] = useState('');
  const [WorCap6,setWorCap6] = useState('');
  const [WorCap7,setWorCap7] = useState('');
  const [WorCap8,setWorCap8] = useState('');

  




  

  const SunCrTr1 = localStorage.getItem('SunCrTr1');
  const SunCrTr2 = localStorage.getItem('SunCrTr2');
  const SunCrTr3 = localStorage.getItem('SunCrTr3');
  const SunCrTr4 = localStorage.getItem('SunCrTr4');
  const SunCrTr5 = localStorage.getItem('SunCrTr5');
  const SunCrTr6 = localStorage.getItem('SunCrTr6');
  const SunCrTr7 = localStorage.getItem('SunCrTr7');
  const SunCrTr8 = localStorage.getItem('SunCrTr8');





  

  const ToOtCuAs1 = localStorage.getItem('ToOtCuAs1');
  const ToOtCuAs2 = localStorage.getItem('ToOtCuAs2');
  const ToOtCuAs3 = localStorage.getItem('ToOtCuAs3');
  const ToOtCuAs4 = localStorage.getItem('ToOtCuAs4');
  const ToOtCuAs5 = localStorage.getItem('ToOtCuAs5');
  const ToOtCuAs6 = localStorage.getItem('ToOtCuAs6');
  const ToOtCuAs7 = localStorage.getItem('ToOtCuAs7');
  const ToOtCuAs8 = localStorage.getItem('ToOtCuAs8');


  const Disp1 = localStorage.getItem('display');
  const Disp2 = localStorage.getItem('display1');
  const Disp3 = localStorage.getItem('display2');
  const Disp4 = localStorage.getItem('display');
  const Disp5 = localStorage.getItem('display');
  const Disp6 = localStorage.getItem('display');
  const Disp7 = localStorage.getItem('display');
  const Disp8 = localStorage.getItem('display');



  
  const TrDeb1 = localStorage.getItem('TrDeb1');
  const TrDeb2 = localStorage.getItem('TrDeb2');
  const TrDeb3 = localStorage.getItem('TrDeb3');
  const TrDeb4 = localStorage.getItem('TrDeb4');
  const TrDeb5 = localStorage.getItem('TrDeb5');
  const TrDeb6 = localStorage.getItem('TrDeb6');
  const TrDeb7 = localStorage.getItem('TrDeb7');
  const TrDeb8 = localStorage.getItem('TrDeb8');


  
  const [MonGrSa1,setMonGrSa1] = useState('');
  const [MonGrSa2,setMonGrSa2] = useState('');
  const [MonGrSa3,setMonGrSa3] = useState('');
  const [MonGrSa4,setMonGrSa4] = useState('');
  const [MonGrSa5,setMonGrSa5] = useState('');
  const [MonGrSa6,setMonGrSa6] = useState('');
  const [MonGrSa7,setMonGrSa7] = useState('');
  const [MonGrSa8,setMonGrSa8] = useState('');

  useEffect(() => {
    localStorage.setItem("MonGrSa1", MonGrSa1);
  }, [MonGrSa1]);
  useEffect(() => {
    localStorage.setItem("MonGrSa2", MonGrSa2);
  }, [MonGrSa2]);
  useEffect(() => {
    localStorage.setItem("MonGrSa3", MonGrSa3);
  }, [MonGrSa3]);
  useEffect(() => {
    localStorage.setItem("MonGrSa4", MonGrSa4);
  }, [MonGrSa4]);
  useEffect(() => {
    localStorage.setItem("MonGrSa5", MonGrSa5);
  }, [MonGrSa5]);
  useEffect(() => {
    localStorage.setItem("MonGrSa6", MonGrSa6);
  }, [MonGrSa6]);
  useEffect(() => {
    localStorage.setItem("MonGrSa7", MonGrSa7);
  }, [MonGrSa7]);
  
  
  




  
  const [ToLiab1,setToLiab1] = useState('');
  const [ToLiab2,setToLiab2] = useState('');
  const [ToLiab3,setToLiab3] = useState('');
  const [ToLiab4,setToLiab4] = useState('');
  const [ToLiab5,setToLiab5] = useState('');
  const [ToLiab6,setToLiab6] = useState('');
  const [ToLiab7,setToLiab7] = useState('');
  const [ToLiab8,setToLiab8] = useState('');

  




  
  const [ToChca1,setToChca1] = useState('');
  const [ToChca2,setToChca2] = useState('');
  const [ToChca3,setToChca3] = useState('');
  const [ToChca4,setToChca4] = useState('');
  const [ToChca5,setToChca5] = useState('');
  const [ToChca6,setToChca6] = useState('');
  const [ToChca7,setToChca7] = useState('');
  const [ToChca8,setToChca8] = useState('');

  
  const [MonPur1,setMonPur1] = useState('');
  const [MonPur2,setMonPur2] = useState('');
  const [MonPur3,setMonPur3] = useState('');
  const [MonPur4,setMonPur4] = useState('');
  const [MonPur5,setMonPur5] = useState('');
  const [MonPur6,setMonPur6] = useState('');
  const [MonPur7,setMonPur7] = useState('');
  const [MonPur8,setMonPur8] = useState('');

  useEffect(() => {
    localStorage.setItem("MonPur1", MonPur1);
  }, [MonPur1]);
  useEffect(() => {
    localStorage.setItem("MonPur2", MonPur2);
  }, [MonPur2]);
  useEffect(() => {
    localStorage.setItem("MonPur3", MonPur3);
  }, [MonPur3]);
  useEffect(() => {
    localStorage.setItem("MonPur4", MonPur4);
  }, [MonPur4]);
  useEffect(() => {
    localStorage.setItem("MonPur5", MonPur5);
  }, [MonPur5]);
  useEffect(() => {
    localStorage.setItem("MonPur6", MonPur6);
  }, [MonPur6]);
  useEffect(() => {
    localStorage.setItem("MonPur7", MonPur7);
  }, [MonPur7]);
  useEffect(() => {
    localStorage.setItem("MonPur8", MonPur8);
  }, [MonPur8]);
  
  


  
const sumMonPur1 = () => {
  try {
   
    const result = eval(`  (${SunCrTr1 || 0} / ${PuRm1 || 0})  *12`);
    setMonPur1(result);
  } catch (error) {
    setMonPur1("Input all ");  
  }
};

useEffect(() => {
  sumMonPur1();
}, [SunCrTr1,SunCrTr1]);

const sumMonPur2 = () => {
  try {
   
    const result = eval(`  (${SunCrTr2 || 0} / ${PuRm2 || 0})  *kk`);
    setMonPur2(result);
  } catch (error) {
    setMonPur2("Input all ");  
  }
};

useEffect(() => {
  sumMonPur2();
}, [SunCrTr2,SunCrTr2]);

const sumMonPur3 = () => {
  try {
   
    const result = eval(`  (${SunCrTr3 || 0} / ${PuRm3 || 0})  *kk`);
    setMonPur3(result);
  } catch (error) {
    setMonPur3("Input all ");  
  }
};

useEffect(() => {
  sumMonPur3();
}, [SunCrTr3,SunCrTr3]);

const sumMonPur4 = () => {
  try {
   
    const result = eval(`  (${SunCrTr4 || 0} / ${PuRm4 || 0})  *kk`);
    setMonPur4(result);
  } catch (error) {
    setMonPur4("Input all ");  
  }
};

useEffect(() => {
  sumMonPur4();
}, [SunCrTr4,SunCrTr4]);

const sumMonPur5 = () => {
  try {
   
    const result = eval(`  (${SunCrTr5 || 0} / ${PuRm5 || 0})  *kk`);
    setMonPur5(result);
  } catch (error) {
    setMonPur5("Input all ");  
  }
};

useEffect(() => {
  sumMonPur5();
}, [SunCrTr5,SunCrTr5]);

const sumMonPur6 = () => {
  try {
   
    const result = eval(`  (${SunCrTr6 || 0} / ${PuRm6 || 0})  *kk`);
    setMonPur6(result);
  } catch (error) {
    setMonPur6("Input all ");  
  }
};

useEffect(() => {
  sumMonPur6();
}, [SunCrTr6,SunCrTr6]);

const sumMonPur7 = () => {
  try {
   
    const result = eval(`  (${SunCrTr7 || 0} / ${PuRm7 || 0})  *kk`);
    setMonPur7(result);
  } catch (error) {
    setMonPur7("Input all ");  
  }
};

useEffect(() => {
  sumMonPur7();
}, [SunCrTr7,SunCrTr7]);

const sumMonPur8 = () => {
  try {
   
    const result = eval(`  (${SunCrTr8 || 0} / ${PuRm8 || 0})  *kk`);
    setMonPur8(result);
  } catch (error) {
    setMonPur8("Input all ");  
  }
};

useEffect(() => {
  sumMonPur8();
}, [SunCrTr8,SunCrTr8]);


  






  

  const SunDeb1 = localStorage.getItem('SunDeb1');
  const SunDeb2 = localStorage.getItem('SunDeb2');
  const SunDeb3 = localStorage.getItem('SunDeb3');
  const SunDeb4 = localStorage.getItem('SunDeb4');
  const SunDeb5 = localStorage.getItem('SunDeb5');
  const SunDeb6 = localStorage.getItem('SunDeb6');
  const SunDeb7 = localStorage.getItem('SunDeb7');
  const SunDeb8 = localStorage.getItem('SunDeb8');





  const [TotInv1,setTotInv1] = useState('');
  const [TotInv2,setTotInv2] = useState('');
  const [TotInv3,setTotInv3] = useState('');
  const [TotInv4,setTotInv4] = useState('');
  const [TotInv5,setTotInv5] = useState('');
  const [TotInv6,setTotInv6] = useState('');
  const [TotInv7,setTotInv7] = useState('');
  const [TotInv8,setTotInv8] = useState('');


  useEffect(() => {
    localStorage.setItem("TotInv1", TotInv1);
  }, [TotInv1]);

  
useEffect(() => {
  localStorage.setItem("TotInv2", TotInv2);
}, [TotInv2]);

useEffect(() => {
  localStorage.setItem("TotInv3", TotInv3);
}, [TotInv3]);


useEffect(() => {
  localStorage.setItem("TotInv4", TotInv4);
}, [TotInv4]);


useEffect(() => {
  localStorage.setItem("TotInv5", TotInv5);
}, [TotInv5]);


useEffect(() => {
  localStorage.setItem("TotInv6", TotInv6);
}, [TotInv6]);


useEffect(() => {
  localStorage.setItem("TotInv7", TotInv7);
}, [TotInv7]);


useEffect(() => {
  localStorage.setItem("TotInv8", TotInv8);
}, [TotInv8]);
  

  
  const [Reci1,setReci1] = useState('');
  const [Reci2,setReci2] = useState('');
  const [Reci3,setReci3] = useState('');
  const [Reci4,setReci4] = useState('');
  const [Reci5,setReci5] = useState('');
  const [Reci6,setReci6] = useState('');
  const [Reci7,setReci7] = useState('');
  const [Reci8,setReci8] = useState('');

  useEffect(() => {
    localStorage.setItem("Reci1", Reci1);
  }, [Reci1]);
  useEffect(() => {
    localStorage.setItem("Reci2", Reci2);
  }, [Reci2]);
  useEffect(() => {
    localStorage.setItem("Reci3", Reci3);
  }, [Reci3]);
  useEffect(() => {
    localStorage.setItem("Reci4", Reci4);
  }, [Reci4]);
  useEffect(() => {
    localStorage.setItem("Reci5", Reci5);
  }, [Reci5]);
  useEffect(() => {
    localStorage.setItem("Reci6", Reci6);
  }, [Reci6]);
  useEffect(() => {
    localStorage.setItem("Reci7", Reci7);
  }, [Reci7]);
  useEffect(() => {
    localStorage.setItem("Reci8", Reci8);
  }, [Reci8]);
  
  


  

const sumReci1 = () => {
  try {
   
    const result = eval(`  (${SunDeb1 || 0} + ${TrDeb1 || 0})  *100`);
    setReci1(result);
  } catch (error) {
    setReci1("Input all ");  
  }
};

useEffect(() => {
  sumReci1();
}, [SunDeb1,TrDeb1]);


const sumReci2 = () => {
  try {
   
    const result = eval(`  (${SunDeb2 || 0} + ${TrDeb2 || 0})  *100`);
    setReci2(result);
  } catch (error) {
    setReci2("Input all ");  
  }
};

useEffect(() => {
  sumReci2();
}, [SunDeb2,TrDeb2]);


const sumReci3 = () => {
  try {
   
    const result = eval(`  (${SunDeb3 || 0} + ${TrDeb3 || 0})  *100`);
    setReci3(result);
  } catch (error) {
    setReci3("Input all ");  
  }
};

useEffect(() => {
  sumReci3();
}, [SunDeb3,TrDeb3]);

const sumReci4 = () => {
  try {
   
    const result = eval(`  (${SunDeb4 || 0} + ${TrDeb4 || 0})  *100`);
    setReci4(result);
  } catch (error) {
    setReci4("Input all ");  
  }
};

useEffect(() => {
  sumReci4();
}, [SunDeb4,TrDeb4]);

const sumReci5 = () => {
  try {
   
    const result = eval(`  (${SunDeb5 || 0} + ${TrDeb5 || 0})  *100`);
    setReci5(result);
  } catch (error) {
    setReci5("Input all ");  
  }
};

useEffect(() => {
  sumReci5();
}, [SunDeb5,TrDeb5]);

const sumReci6 = () => {
  try {
   
    const result = eval(`  (${SunDeb6 || 0} + ${TrDeb6 || 0})  *100`);
    setReci6(result);
  } catch (error) {
    setReci6("Input all ");  
  }
};

useEffect(() => {
  sumReci6();
}, [SunDeb6,TrDeb6]);

const sumReci7 = () => {
  try {
   
    const result = eval(`  (${SunDeb7 || 0} + ${TrDeb7 || 0})  *100`);
    setReci7(result);
  } catch (error) {
    setReci7("Input all ");  
  }
};

useEffect(() => {
  sumReci7();
}, [SunDeb7,TrDeb7]);

const sumReci8 = () => {
  try {
   
    const result = eval(`  (${SunDeb8 || 0} + ${TrDeb8 || 0})  *100`);
    setReci8(result);
  } catch (error) {
    setReci8("Input all ");  
  }
};

useEffect(() => {
  sumReci8();
}, [SunDeb8,TrDeb8]);



const ToOtCuLi1 = localStorage.getItem('ToOtCuLi1');
const ToOtCuLi2 = localStorage.getItem('ToOtCuLi2');
const ToOtCuLi3 = localStorage.getItem('ToOtCuLi3');
const ToOtCuLi4 = localStorage.getItem('ToOtCuLi4');
const ToOtCuLi5 = localStorage.getItem('ToOtCuLi5');
const ToOtCuLi6 = localStorage.getItem('ToOtCuLi6');
const ToOtCuLi7 = localStorage.getItem('ToOtCuLi7');
const ToOtCuLi8 = localStorage.getItem('ToOtCuLi8');



const NeCaAcc1 = localStorage.getItem('NeCaAcc1');
const NeCaAcc2 = localStorage.getItem('NeCaAcc1');
const NeCaAcc3 = localStorage.getItem('NeCaAcc1');
const NeCaAcc4 = localStorage.getItem('NeCaAcc1');
const NeCaAcc5 = localStorage.getItem('NeCaAcc1');
const NeCaAcc6 = localStorage.getItem('NeCaAcc1');
const NeCaAcc7 = localStorage.getItem('NeCaAcc1');
const NeCaAcc8 = localStorage.getItem('NeCaAcc1');





  


  
  const ReMa1 = localStorage.getItem('ReMa1');
  const ReMa2 = localStorage.getItem('ReMa2');
  const ReMa3 = localStorage.getItem('ReMa3');
  const ReMa4 = localStorage.getItem('ReMa4');
  const ReMa5 = localStorage.getItem('ReMa5');
  const ReMa6 = localStorage.getItem('ReMa6');
  const ReMa7 = localStorage.getItem('ReMa7');
  const ReMa8 = localStorage.getItem('ReMa8');




  
  const [MoCons1,setMoCons1] = useState('');
  const [MoCons2,setMoCons2] = useState('');
  const [MoCons3,setMoCons3] = useState('');
  const [MoCons4,setMoCons4] = useState('');
  const [MoCons5,setMoCons5] = useState('');
  const [MoCons6,setMoCons6] = useState('');
  const [MoCons7,setMoCons7] = useState('');
  const [MoCons8,setMoCons8] = useState('');


  


  
  const [MonCoSa1,setMonCoSa1] = useState('');
  const [MonCoSa2,setMonCoSa2] = useState('');
  const [MonCoSa3,setMonCoSa3] = useState('');
  const [MonCoSa4,setMonCoSa4] = useState('');
  const [MonCoSa5,setMonCoSa5] = useState('');
  const [MonCoSa6,setMonCoSa6] = useState('');
  const [MonCoSa7,setMonCoSa7] = useState('');  
  const [MonCoSa8,setMonCoSa8] = useState('');


  useEffect(() => {
    localStorage.setItem("MonCoSa1", MonCoSa1);
  }, [MonCoSa1]);
  
useEffect(() => {
  localStorage.setItem("MonCoSa2", MonCoSa2);
}, [MonCoSa2]);

useEffect(() => {
  localStorage.setItem("MonCoSa3", MonCoSa3);
}, [MonCoSa3]);

useEffect(() => {
  localStorage.setItem("MonCoSa4", MonCoSa4);
}, [MonCoSa4]);

useEffect(() => {
  localStorage.setItem("MonCoSa5", MonCoSa5);
}, [MonCoSa5]);
useEffect(() => {
  localStorage.setItem("MonCoSa6", MonCoSa6);
}, [MonCoSa6]);

useEffect(() => {
  localStorage.setItem("MonCoSa7", MonCoSa7);
}, [MonCoSa7]);
useEffect(() => {
  localStorage.setItem("MonCoSa8", MonCoSa8);
}, [MonCoSa8]);
  
  

  
  const conSuSp1 = localStorage.getItem('conSuSp1');
  const conSuSp2 = localStorage.getItem('conSuSp2');
  const conSuSp3 = localStorage.getItem('conSuSp3');
  const conSuSp4 = localStorage.getItem('conSuSp4');
  const conSuSp5 = localStorage.getItem('conSuSp5');
  const conSuSp6 = localStorage.getItem('conSuSp6');
  const conSuSp7 = localStorage.getItem('conSuSp7');
  const conSuSp8 = localStorage.getItem('conSuSp8');


  
  const costsales1 = localStorage.getItem('costsales1');
  const costsales2 = localStorage.getItem('costsales2');
  const costsales3 = localStorage.getItem('costsales3');
  const costsales4 = localStorage.getItem('costsales4');
  const costsales5 = localStorage.getItem('costsales5');
  const costsales6 = localStorage.getItem('costsales6');
  const costsales7 = localStorage.getItem('costsales7');
  const costsales8 = localStorage.getItem('costsales8');



  
  const FinishGo1 = localStorage.getItem('FinishGo1');
  const FinishGo2 = localStorage.getItem('FinishGo2');
  const FinishGo3 = localStorage.getItem('FinishGo3');
  const FinishGo4 = localStorage.getItem('FinishGo4');
  const FinishGo5 = localStorage.getItem('FinishGo5');
  const FinishGo6 = localStorage.getItem('FinishGo6');
  const FinishGo7 = localStorage.getItem('FinishGo7');
  const FinishGo8 = localStorage.getItem('FinishGo8');










  
  const [MoCoPr1,setMoCoPr1] = useState('');
  const [MoCoPr2,setMoCoPr2] = useState('');
  const [MoCoPr3,setMoCoPr3] = useState('');
  const [MoCoPr4,setMoCoPr4] = useState('');
  const [MoCoPr5,setMoCoPr5] = useState('');
  const [MoCoPr6,setMoCoPr6] = useState('');
  const [MoCoPr7,setMoCoPr7] = useState('');
  const [MoCoPr8,setMoCoPr8] = useState('');



  
  const costprod1 = localStorage.getItem('costprod1');
  const costprod2 = localStorage.getItem('costprod2');
  const costprod3 = localStorage.getItem('costprod3');
  const costprod4 = localStorage.getItem('costprod4');
  const costprod5 = localStorage.getItem('costprod5');
  const costprod6 = localStorage.getItem('costprod6');
  const costprod7 = localStorage.getItem('costprod7');
  const costprod8 = localStorage.getItem('costprod8');



  
  
  const stkInPr1 = localStorage.getItem('stkInPr1');
  const stkInPr2 = localStorage.getItem('stkInPr2');
  const stkInPr3 = localStorage.getItem('stkInPr3');
  const stkInPr4 = localStorage.getItem('stkInPr4');
  const stkInPr5 = localStorage.getItem('stkInPr5');
  const stkInPr6 = localStorage.getItem('stkInPr6');
  const stkInPr7 = localStorage.getItem('stkInPr7');
  const stkInPr8 = localStorage.getItem('stkInPr8');



   
  const raMa1 = localStorage.getItem('raMa1');
  const raMa2 = localStorage.getItem('raMa2');
  const raMa3 = localStorage.getItem('raMa3');
  const raMa4 = localStorage.getItem('raMa4');
  const raMa5 = localStorage.getItem('raMa5');
  const raMa6= localStorage.getItem('raMa6');
  const raMa7 = localStorage.getItem('raMa7');
  const raMa8= localStorage.getItem('raMa8');

  
  const PuRm1= localStorage.getItem('PuRm1');
  const PuRm2= localStorage.getItem('PuRm2');
  const PuRm3= localStorage.getItem('PuRm3');
  const PuRm4= localStorage.getItem('PuRm4');
  const PuRm5= localStorage.getItem('PuRm5'); 
  const PuRm6= localStorage.getItem('PuRm6');
  const PuRm7= localStorage.getItem('PuRm7');
  const PuRm8= localStorage.getItem('PuRm8');
  
  



  const [MonCon1,setMonCon1] = useState('');
  const [MonCon2,setMonCon2] = useState('');
  const [MonCon3,setMonCon3] = useState('');
  const [MonCon4,setMonCon4] = useState('');
  const [MonCon5,setMonCon5] = useState('');
  const [MonCon6,setMonCon6] = useState('');
  const [MonCon7,setMonCon7] = useState('');
  const [MonCon8,setMonCon8] = useState('');



  





  
const sumMonCon1 = () => {
  try {
   
    const result = eval(`  (${raMa1 || 0} / ${PuRm1 || 0})  *12`);
    setMonCon1(result);
  } catch (error) {
    setMonCon1("Input all ");  
  }
};

useEffect(() => {
  sumMonCon1();
}, [raMa1,PuRm1]);

const sumMonCon2 = () => {
  try {
   
    const result = eval(`  (${raMa2 || 0} / ${PuRm2 || 0})  *12`);
    setMonCon2(result);
  } catch (error) {
    setMonCon2("Input all ");  
  }
};

useEffect(() => {
  sumMonCon2();
}, [raMa2,PuRm2]);

const sumMonCon3 = () => {
  try {
   
    const result = eval(`  (${raMa3 || 0} / ${PuRm3 || 0})  *12`);
    setMonCon3(result);
  } catch (error) {
    setMonCon3("Input all ");  
  }
};

useEffect(() => {
  sumMonCon3();
}, [raMa3,PuRm3]);


const sumMonCon4 = () => {
  try {
   
    const result = eval(`  (${raMa4 || 0} / ${PuRm4 || 0})  *12`);
    setMonCon4(result);
  } catch (error) {
    setMonCon4("Input all ");  
  }
};

useEffect(() => {
  sumMonCon4();
}, [raMa4,PuRm4]);


const sumMonCon5 = () => {
  try {
   
    const result = eval(`  (${raMa5 || 0} / ${PuRm5 || 0})  *12`);
    setMonCon5(result);
  } catch (error) {
    setMonCon5("Input all ");  
  }
};

useEffect(() => {
  sumMonCon5();
}, [raMa5,PuRm5]);




const sumMonCon6 = () => {
  try {
   
    const result = eval(`  (${raMa6 || 0} / ${PuRm6 || 0})  *12`);
    setMonCon6(result);
  } catch (error) {
    setMonCon6("Input all ");  
  }
};

useEffect(() => {
  sumMonCon6();
}, [raMa6,PuRm6]);

const sumMonCon7 = () => {
  try {
   
    const result = eval(`  (${raMa7 || 0} / ${PuRm7 || 0})  *12`);
    setMonCon7(result);
  } catch (error) {
    setMonCon7("Input all ");  
  }
};

useEffect(() => {
  sumMonCon7();
}, [raMa7,PuRm7]);

const sumMonCon8 = () => {
  try {
   
    const result = eval(`  (${raMa8 || 0} / ${PuRm8 || 0})  *12`);
    setMonCon8(result);
  } catch (error) {
    setMonCon8("Input all ");  
  }
};

useEffect(() => {
  sumMonCon8();
}, [raMa8,PuRm8]);

// ------------------------

const sumMoCoPr1 = () => {
  try {
   
    const result = eval(`  (${stkInPr1 || 0} / ${costprod1 || 0})  *12`);
    setMoCoPr1(result);
  } catch (error) {
    setMoCoPr1("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr1();
}, [stkInPr1,costprod1]);

const sumMoCoPr2 = () => {
  try {
   
    const result = eval(`  (${stkInPr2 || 0} / ${costprod2 || 0})  *12`);
    setMoCoPr2(result);
  } catch (error) {
    setMoCoPr2("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr2();
}, [stkInPr2,costprod2]);

const sumMoCoPr3 = () => {
  try {
   
    const result = eval(`  (${stkInPr3 || 0} / ${costprod3 || 0})  *12`);
    setMoCoPr3(result);
  } catch (error) {
    setMoCoPr3("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr3();
}, [stkInPr3,costprod3]);

const sumMoCoPr4 = () => {
  try {
   
    const result = eval(`  (${stkInPr4 || 0} / ${costprod4 || 0})  *12`);
    setMoCoPr4(result);
  } catch (error) {
    setMoCoPr4("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr4();
}, [stkInPr4,costprod4]);

const sumMoCoPr5 = () => {
  try {
   
    const result = eval(`  (${stkInPr5 || 0} / ${costprod5 || 0})  *12`);
    setMoCoPr5(result);
  } catch (error) {
    setMoCoPr5("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr5();
}, [stkInPr5,costprod5]);

const sumMoCoPr6 = () => {
  try {
   
    const result = eval(`  (${stkInPr6 || 0} / ${costprod6 || 0})  *12`);
    setMoCoPr6(result);
  } catch (error) {
    setMoCoPr6("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr6();
}, [stkInPr6,costprod6]);

const sumMoCoPr7 = () => {
  try {
   
    const result = eval(`  (${stkInPr7 || 0} / ${costprod7 || 0})  *12`);
    setMoCoPr7(result);
  } catch (error) {
    setMoCoPr7("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr7();
}, [stkInPr7,costprod7]);

const sumMoCoPr8 = () => {
  try {
   
    const result = eval(`  (${stkInPr8 || 0} / ${costprod8 || 0})  *12`);
    setMoCoPr8(result);
  } catch (error) {
    setMoCoPr8("Input all ");  
  }
};

useEffect(() => {
  sumMoCoPr8();
}, [stkInPr8,costprod8]);



const sumMonCoSa1 = () => {
  try {
   
    const result = eval(`  (${FinishGo1 || 0} / ${costsales1 || 0})  *12`);
    setMonCoSa1(result);
  } catch (error) {
    setMonCoSa1("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa1();
}, [FinishGo1,costsales1]);

const sumMonCoSa2 = () => {
  try {
   
    const result = eval(`  (${FinishGo2 || 0} / ${costsales2 || 0})  *12`);
    setMonCoSa2(result);
  } catch (error) {
    setMonCoSa2("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa2();
}, [FinishGo2,costsales2]);

const sumMonCoSa3 = () => {
  try {
   
    const result = eval(`  (${FinishGo3 || 0} / ${costsales3 || 0})  *12`);
    setMonCoSa3(result);
  } catch (error) {
    setMonCoSa3("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa3();
}, [FinishGo3,costsales3]);

const sumMonCoSa4 = () => {
  try {
   
    const result = eval(`  (${FinishGo4 || 0} / ${costsales4 || 0})  *12`);
    setMonCoSa4(result);
  } catch (error) {
    setMonCoSa4("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa4();
}, [FinishGo4,costsales4]);

const sumMonCoSa5 = () => {
  try {
   
    const result = eval(`  (${FinishGo5 || 0} / ${costsales5 || 0})  *12`);
    setMonCoSa5(result);
  } catch (error) {
    setMonCoSa5("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa5();
}, [FinishGo5,costsales5]);

const sumMonCoSa6 = () => {
  try {
   
    const result = eval(`  (${FinishGo6 || 0} / ${costsales6 || 0})  *12`);
    setMonCoSa6(result);
  } catch (error) {
    setMonCoSa6("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa6();
}, [FinishGo6,costsales6]);

const sumMonCoSa7 = () => {
  try {
   
    const result = eval(`  (${FinishGo7 || 0} / ${costsales7 || 0})  *12`);
    setMonCoSa7(result);
  } catch (error) {
    setMonCoSa7("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa7();
}, [FinishGo7,costsales7]);

const sumMonCoSa8 = () => {
  try {
   
    const result = eval(`  (${FinishGo8 || 0} / ${costsales8 || 0})  *12`);
    setMonCoSa8(result);
  } catch (error) {
    setMonCoSa8("Input all ");  
  }
};

useEffect(() => {
  sumMonCoSa8();
}, [FinishGo8,costsales8]);

// ----------------------------


const sumMoCons1 = () => {
  try {
   
    const result = eval(`  (${conSuSp1 || 0} / ${ReMa1 || 0})  *12`);
    setMoCons1(result);
  } catch (error) {
    setMoCons1("Input all ");  
  }
};

useEffect(() => {
  sumMoCons1();
}, [conSuSp1,ReMa1]);


const sumMoCons2 = () => {
  try {
   
    const result = eval(`  (${conSuSp2 || 0} / ${ReMa2 || 0})  *12`);
    setMoCons2(result);
  } catch (error) {
    setMoCons2("Input all ");  
  }
};

useEffect(() => {
  sumMoCons2();
}, [conSuSp2,ReMa2]);


const sumMoCons3 = () => {
  try {
   
    const result = eval(`  (${conSuSp3 || 0} / ${ReMa3 || 0})  *12`);
    setMoCons3(result);
  } catch (error) {
    setMoCons3("Input all ");  
  }
};

useEffect(() => {
  sumMoCons3();
}, [conSuSp3,ReMa3]);


const sumMoCons4 = () => {
  try {
   
    const result = eval(`  (${conSuSp4 || 0} / ${ReMa4 || 0})  *12`);
    setMoCons4(result);
  } catch (error) {
    setMoCons4("Input all ");  
  }
};

useEffect(() => {
  sumMoCons4();
}, [conSuSp4,ReMa4]);


const sumMoCons5 = () => {
  try {
   
    const result = eval(`  (${conSuSp5 || 0} / ${ReMa5 || 0})  *12`);
    setMoCons5(result);
  } catch (error) {
    setMoCons5("Input all ");  
  }
};

useEffect(() => {
  sumMoCons5();
}, [conSuSp5,ReMa5]);


const sumMoCons6 = () => {
  try {
   
    const result = eval(`  (${conSuSp6 || 0} / ${ReMa6 || 0})  *12`);
    setMoCons6(result);
  } catch (error) {
    setMoCons6("Input all ");  
  }
};

useEffect(() => {
  sumMoCons6();
}, [conSuSp6,ReMa6]);


const sumMoCons7 = () => {
  try {
   
    const result = eval(`  (${conSuSp7 || 0} / ${ReMa7 || 0})  *12`);
    setMoCons7(result);
  } catch (error) {
    setMoCons7("Input all ");  
  }
};

useEffect(() => {
  sumMoCons7();
}, [conSuSp7,ReMa7]);


const sumMoCons8 = () => {
  try {
   
    const result = eval(`  (${conSuSp8 || 0} / ${ReMa8 || 0})  *12`);
    setMoCons8(result);
  } catch (error) {
    setMoCons8("Input all ");  
  }
};

useEffect(() => {
  sumMoCons8();
}, [conSuSp8,ReMa8]);


const sumTotInv1 = () => {
  try {
   
    const result = eval(`  (${raMa1 || 0} + ${stkInPr1 || 0} + ${FinishGo1 || 0} + ${conSuSp1 || 0} ) `);
    setTotInv1(result);
  } catch (error) {
    setTotInv1("Input all ");  
  }
};

useEffect(() => {
  sumTotInv1();
}, [raMa1,stkInPr1,FinishGo1,conSuSp1]);


const sumTotInv2 = () => {
  try {
   
    const result = eval(`  (${raMa2 || 0} + ${stkInPr2 || 0} + ${FinishGo2 || 0} + ${conSuSp2 || 0} ) `);
    setTotInv2(result);
  } catch (error) {
    setTotInv2("Input all ");  
  }
};

useEffect(() => {
  sumTotInv2();
}, [raMa2,stkInPr2,FinishGo2,conSuSp2]);



const sumTotInv3 = () => {
  try {
   
    const result = eval(`  (${raMa3 || 0} + ${stkInPr3 || 0} + ${FinishGo3 || 0} + ${conSuSp3 || 0} ) `);
    setTotInv3(result);
  } catch (error) {
    setTotInv3("Input all ");  
  }
};

useEffect(() => {
  sumTotInv3();
}, [raMa3,stkInPr3,FinishGo3,conSuSp3]);


const sumTotInv4 = () => {
  try {
   
    const result = eval(`  (${raMa4 || 0} + ${stkInPr4 || 0} + ${FinishGo4 || 0} + ${conSuSp4 || 0} ) `);
    setTotInv4(result);
  } catch (error) {
    setTotInv4("Input all ");  
  }
};

useEffect(() => {
  sumTotInv4();
}, [raMa4,stkInPr4,FinishGo4,conSuSp4]);


const sumTotInv5 = () => {
  try {
   
    const result = eval(`  (${raMa5 || 0} + ${stkInPr5 || 0} + ${FinishGo5 || 0} + ${conSuSp5 || 0} ) `);
    setTotInv5(result);
  } catch (error) {
    setTotInv5("Input all ");  
  }
};

useEffect(() => {
  sumTotInv5();
}, [raMa5,stkInPr5,FinishGo5,conSuSp5]);


const sumTotInv6 = () => {
  try {
   
    const result = eval(`  (${raMa6 || 0} + ${stkInPr6 || 0} + ${FinishGo6 || 0} + ${conSuSp6 || 0} ) `);
    setTotInv6(result);
  } catch (error) {
    setTotInv6("Input all ");  
  }
};

useEffect(() => {
  sumTotInv6();
}, [raMa6,stkInPr6,FinishGo6,conSuSp6]);


const sumTotInv7 = () => {
  try {
   
    const result = eval(`  (${raMa7 || 0} + ${stkInPr7 || 0} + ${FinishGo7 || 0} + ${conSuSp7 || 0} ) `);
    setTotInv7(result);
  } catch (error) {
    setTotInv7("Input all ");  
  }
};

useEffect(() => {
  sumTotInv7();
}, [raMa7,stkInPr7,FinishGo7,conSuSp7]);


const sumTotInv8 = () => {
  try {
   
    const result = eval(`  (${raMa8 || 0} + ${stkInPr8 || 0} + ${FinishGo8 || 0} + ${conSuSp8 || 0} ) `);
    setTotInv8(result);
  } catch (error) {
    setTotInv8("Input all ");  
  }
};

useEffect(() => {
  sumTotInv8();
}, [raMa8,stkInPr8,FinishGo8,conSuSp8]);



  
const sumMonGrSa1 = () => {
  try {
   
    const result = eval(`  (${Reci1 || 0} / ${Disp1 || 0})  *12`);
    setMonGrSa1(result);
  } catch (error) {
    setMonGrSa1("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa1();
}, [Reci1,Disp1]);


const sumMonGrSa2 = () => {
  try {
   
    const result = eval(`  (${Reci2 || 0} / ${Disp2 || 0})  *12`);
    setMonGrSa2(result);
  } catch (error) {
    setMonGrSa2("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa2();
}, [Reci2,Disp2]);


const sumMonGrSa3 = () => {
  try {
   
    const result = eval(`  (${Reci3 || 0} / ${Disp3 || 0})  *12`);
    setMonGrSa3(result);
  } catch (error) {
    setMonGrSa3("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa3();
}, [Reci3,Disp3]);


const sumMonGrSa4 = () => {
  try {
   
    const result = eval(`  (${Reci4 || 0} / ${Disp4 || 0})  *12`);
    setMonGrSa4(result);
  } catch (error) {
    setMonGrSa4("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa4();
}, [Reci4,Disp4]);


const sumMonGrSa5 = () => {
  try {
   
    const result = eval(`  (${Reci5 || 0} / ${Disp5 || 0})  *12`);
    setMonGrSa5(result);
  } catch (error) {
    setMonGrSa5("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa5();
}, [Reci5,Disp5]);


const sumMonGrSa6 = () => {
  try {
   
    const result = eval(`  (${Reci6 || 0} / ${Disp6 || 0})  *12`);
    setMonGrSa6(result);
  } catch (error) {
    setMonGrSa6("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa6();
}, [Reci6,Disp6]);


const sumMonGrSa7 = () => {
  try {
   
    const result = eval(`  (${Reci7 || 0} / ${Disp7 || 0})  *12`);
    setMonGrSa7(result);
  } catch (error) {
    setMonGrSa7("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa7();
}, [Reci7,Disp7]);


const sumMonGrSa8 = () => {
  try {
   
    const result = eval(`  (${Reci8 || 0} / ${Disp8 || 0})  *12`);
    setMonGrSa8(result);
  } catch (error) {
    setMonGrSa8("Input all ");  
  }
};

useEffect(() => {
  sumMonGrSa8();
}, [Reci8,Disp8]);


const sumToChca1 = () => {
  try {
   
    const result = eval(`  (${TotInv1 || 0} + ${Reci1 || 0}  + (${ToOtCuAs1 || 0}  )  `);
    setToChca1(result);
  } catch (error) {
    setToChca1("Input all ");  
  }
};

useEffect(() => {
  sumToChca1();
}, [TotInv1,Reci1,ToOtCuAs1]);

const sumToChca2 = () => {
  try {
   
    const result = eval(`  (${TotInv2 || 0} + ${Reci2 || 0}  + (${ToOtCuAs2 || 0}  )  `);
    setToChca2(result);
  } catch (error) {
    setToChca2("Input all ");  
  }
};

useEffect(() => {
  sumToChca2();
}, [TotInv2,Reci2,ToOtCuAs2]);

const sumToChca3 = () => {
  try {
   
    const result = eval(`  (${TotInv3 || 0} + ${Reci3 || 0}  + (${ToOtCuAs3 || 0}  )  `);
    setToChca3(result);
  } catch (error) {
    setToChca3("Input all ");  
  }
};

useEffect(() => {
  sumToChca3();
}, [TotInv3,Reci3,ToOtCuAs3]);

const sumToChca4 = () => {
  try {
   
    const result = eval(`  (${TotInv4 || 0} + ${Reci4 || 0}  + (${ToOtCuAs4 || 0}  )  `);
    setToChca4(result);
  } catch (error) {
    setToChca4("Input all ");  
  }
};

useEffect(() => {
  sumToChca4();
}, [TotInv4,Reci4,ToOtCuAs4]);

const sumToChca5 = () => {
  try {
   
    const result = eval(`  (${TotInv5 || 0} + ${Reci5 || 0}  + (${ToOtCuAs5 || 0}  )  `);
    setToChca5(result);
  } catch (error) {
    setToChca5("Input all ");  
  }
};

useEffect(() => {
  sumToChca5();
}, [TotInv5,Reci5,ToOtCuAs5]);

const sumToChca6 = () => {
  try {
   
    const result = eval(`  (${TotInv6 || 0} + ${Reci6 || 0}  + (${ToOtCuAs6 || 0}  )  `);
    setToChca6(result);
  } catch (error) {
    setToChca6("Input all ");  
  }
};

useEffect(() => {
  sumToChca6();
}, [TotInv6,Reci6,ToOtCuAs6]);

const sumToChca7 = () => {
  try {
   
    const result = eval(`  (${TotInv7 || 0} + ${Reci7 || 0}  + (${ToOtCuAs7 || 0}  )  `);
    setToChca7(result);
  } catch (error) {
    setToChca7("Input all ");  
  }
};

useEffect(() => {
  sumToChca7();
}, [TotInv7,Reci7,ToOtCuAs7]);

const sumToChca8 = () => {
  try {
   
    const result = eval(`  (${TotInv8 || 0} + ${Reci8 || 0}  + (${ToOtCuAs8 || 0}  )  `);
    setToChca8(result);
  } catch (error) {
    setToChca8("Input all ");  
  }
};

useEffect(() => {
  sumToChca8();
}, [TotInv8,Reci8,ToOtCuAs8]);



const sumToLiab1 = () => {
  try {
   
    const result = eval(`  (${SunCrTr1 || 0} / ${ToOtCuLi1 || 0})  `);
    setToLiab1(result);
  } catch (error) {
    setToLiab1("Input all ");  
  }
};

useEffect(() => {
  sumToLiab1();
}, [SunCrTr1,ToOtCuLi1]);

const sumToLiab2 = () => {
  try {
   
    const result = eval(`  (${SunCrTr2 || 0} / ${ToOtCuLi2 || 0})  `);
    setToLiab2(result);
  } catch (error) {
    setToLiab2("Input all ");  
  }
};

useEffect(() => {
  sumToLiab2();
}, [SunCrTr2,ToOtCuLi2]);

const sumToLiab3 = () => {
  try {
   
    const result = eval(`  (${SunCrTr3 || 0} / ${ToOtCuLi3 || 0})  `);
    setToLiab3(result);
  } catch (error) {
    setToLiab3("Input all ");  
  }
};

useEffect(() => {
  sumToLiab3();
}, [SunCrTr3,ToOtCuLi3]);

const sumToLiab4 = () => {
  try {
   
    const result = eval(`  (${SunCrTr4 || 0} / ${ToOtCuLi4 || 0})  `);
    setToLiab4(result);
  } catch (error) {
    setToLiab4("Input all ");  
  }
};

useEffect(() => {
  sumToLiab4();
}, [SunCrTr4,ToOtCuLi4]);

const sumToLiab5 = () => {
  try {
   
    const result = eval(`  (${SunCrTr5 || 0} / ${ToOtCuLi5 || 0})  `);
    setToLiab5(result);
  } catch (error) {
    setToLiab5("Input all ");  
  }
};

useEffect(() => {
  sumToLiab5();
}, [SunCrTr5,ToOtCuLi5]);

const sumToLiab6 = () => {
  try {
   
    const result = eval(`  (${SunCrTr6 || 0} / ${ToOtCuLi6 || 0})  `);
    setToLiab6(result);
  } catch (error) {
    setToLiab6("Input all ");  
  }
};

useEffect(() => {
  sumToLiab6();
}, [SunCrTr6,ToOtCuLi6]);

const sumToLiab7 = () => {
  try {
   
    const result = eval(`  (${SunCrTr7 || 0} / ${ToOtCuLi7 || 0})  `);
    setToLiab7(result);
  } catch (error) {
    setToLiab7("Input all ");  
  }
};

useEffect(() => {
  sumToLiab7();
}, [SunCrTr7,ToOtCuLi7]);

const sumToLiab8 = () => {
  try {
   
    const result = eval(`  (${SunCrTr8 || 0} / ${ToOtCuLi8 || 0})  `);
    setToLiab8(result);
  } catch (error) {
    setToLiab8("Input all ");  
  }
};

useEffect(() => {
  sumToLiab8();
}, [SunCrTr8,ToOtCuLi8]);


const sumWorCap1 = () => {
  try {
   
    const result = eval(`  (${ToChca1 || 0} - ${ToLiab1 || 0})  `);
    setWorCap1(result);
  } catch (error) {
    setWorCap1("Input all ");  
  }
};

useEffect(() => {
  sumWorCap1();
}, [ToChca1,ToLiab1]);

const sumWorCap2 = () => {
  try {
   
    const result = eval(`  (${ToChca2 || 0} - ${ToLiab2 || 0})  `);
    setWorCap2(result);
  } catch (error) {
    setWorCap2("Input all ");  
  }
};

useEffect(() => {
  sumWorCap2();
}, [ToChca2,ToLiab2]);

const sumWorCap3 = () => {
  try {
   
    const result = eval(`  (${ToChca3 || 0} - ${ToLiab3 || 0})  `);
    setWorCap3(result);
  } catch (error) {
    setWorCap3("Input all ");  
  }
};

useEffect(() => {
  sumWorCap3();
}, [ToChca3,ToLiab3]);

const sumWorCap4 = () => {
  try {
   
    const result = eval(`  (${ToChca4 || 0} - ${ToLiab4 || 0})  `);
    setWorCap4(result);
  } catch (error) {
    setWorCap4("Input all ");  
  }
};

useEffect(() => {
  sumWorCap4();
}, [ToChca4,ToLiab4]);

const sumWorCap5 = () => {
  try {
   
    const result = eval(`  (${ToChca5 || 0} - ${ToLiab5 || 0})  `);
    setWorCap5(result);
  } catch (error) {
    setWorCap5("Input all ");  
  }
};

useEffect(() => {
  sumWorCap5();
}, [ToChca5,ToLiab5]);

const sumWorCap6 = () => {
  try {
   
    const result = eval(`  (${ToChca6 || 0} - ${ToLiab6 || 0})  `);
    setWorCap6(result);
  } catch (error) {
    setWorCap6("Input all ");  
  }
};

useEffect(() => {
  sumWorCap6();
}, [ToChca6,ToLiab6]);

const sumWorCap7 = () => {
  try {
   
    const result = eval(`  (${ToChca7 || 0} - ${ToLiab7 || 0})  `);
    setWorCap7(result);
  } catch (error) {
    setWorCap7("Input all ");  
  }
};

useEffect(() => {
  sumWorCap7();
}, [ToChca7,ToLiab7]);

const sumWorCap8 = () => {
  try {
   
    const result = eval(`  (${ToChca8 || 0} - ${ToLiab8 || 0})  `);
    setWorCap8(result);
  } catch (error) {
    setWorCap8("Input all ");  
  }
};

useEffect(() => {
  sumWorCap8();
}, [ToChca8,ToLiab8]);

const summargCAB1 = () => {
  try {
   
    const result = eval(`  ${ToChca1 || 0}  *0.25`);
    setmargCAB1(result);
  } catch (error) {
    setmargCAB1("Input all ");  
  }
};

useEffect(() => {
  summargCAB1();
}, [ToChca1]);

const summargCAB2 = () => {
  try {
   
    const result = eval(`  ${ToChca2 || 0}  *0.00`);
    setmargCAB2(result);
  } catch (error) {
    setmargCAB2("Input all ");  
  }
};

useEffect(() => {
  summargCAB2();
}, [ToChca2]);

const summargCAB3 = () => {
  try {
   
    const result = eval(`  ${ToChca3 || 0}  *0.00`);
    setmargCAB3(result);
  } catch (error) {
    setmargCAB3("Input all ");  
  }
};

useEffect(() => {
  summargCAB3();
}, [ToChca3]);

const summargCAB4 = () => {
  try {
   
    const result = eval(`  ${ToChca4 || 0}  *0.00`);
    setmargCAB4(result);
  } catch (error) {
    setmargCAB4("Input all ");  
  }
};

useEffect(() => {
  summargCAB4();
}, [ToChca4]);

const summargCAB5 = () => {
  try {
   
    const result = eval(`  ${ToChca5 || 0}  *0.00`);
    setmargCAB5(result);
  } catch (error) {
    setmargCAB5("Input all ");  
  }
};

useEffect(() => {
  summargCAB5();
}, [ToChca5]);

const summargCAB6 = () => {
  try {
   
    const result = eval(`  ${ToChca6 || 0}  *0.00`);
    setmargCAB6(result);
  } catch (error) {
    setmargCAB6("Input all ");  
  }
};

useEffect(() => {
  summargCAB6();
}, [ToChca6]);

const summargCAB7 = () => {
  try {
   
    const result = eval(`  ${ToChca7 || 0}  *0.00`);
    setmargCAB7(result);
  } catch (error) {
    setmargCAB7("Input all ");  
  }
};

useEffect(() => {
  summargCAB7();
}, [ToChca7]);

const summargCAB8 = () => {
  try {
   
    const result = eval(`  ${ToChca8 || 0}  *0.00`);
    setmargCAB8(result);
  } catch (error) {
    setmargCAB8("Input all ");  
  }
};

useEffect(() => {
  summargCAB8();
}, [ToChca8]);



const sumaBi1 = () => {
  try {
   
    const result = eval(`  (${WorCap1 || 0} - ${margCAB1 || 0})  `);
    setaBi1(result);
  } catch (error) {
    setaBi1("Input all ");  
  }
};

useEffect(() => {
  sumaBi1();
}, [WorCap1,margCAB1]);


const sumaBi2 = () => {
  try {
   
    const result = eval(`  (${WorCap2 || 0} - ${margCAB2 || 0})  `);
    setaBi2(result);
  } catch (error) {
    setaBi2("Input all ");  
  }
};

useEffect(() => {
  sumaBi2();
}, [WorCap2,margCAB2]);


const sumaBi3 = () => {
  try {
   
    const result = eval(`  (${WorCap3 || 0} - ${margCAB3 || 0})  `);
    setaBi3(result);
  } catch (error) {
    setaBi3("Input all ");  
  }
};

useEffect(() => {
  sumaBi3();
}, [WorCap3,margCAB3]);


const sumaBi4 = () => {
  try {
   
    const result = eval(`  (${WorCap4 || 0} - ${margCAB4 || 0})  `);
    setaBi4(result);
  } catch (error) {
    setaBi4("Input all ");  
  }
};

useEffect(() => {
  sumaBi4();
}, [WorCap4,margCAB4]);


const sumaBi5 = () => {
  try {
   
    const result = eval(`  (${WorCap5 || 0} - ${margCAB5 || 0})  `);
    setaBi5(result);
  } catch (error) {
    setaBi5("Input all ");  
  }
};

useEffect(() => {
  sumaBi5();
}, [WorCap5,margCAB5]);


const sumaBi6 = () => {
  try {
   
    const result = eval(`  (${WorCap6 || 0} - ${margCAB6 || 0})  `);
    setaBi6(result);
  } catch (error) {
    setaBi6("Input all ");  
  }
};

useEffect(() => {
  sumaBi6();
}, [WorCap6,margCAB6]);


const sumaBi7 = () => {
  try {
   
    const result = eval(`  (${WorCap7 || 0} - ${margCAB7 || 0})  `);
    setaBi7(result);
  } catch (error) {
    setaBi7("Input all ");  
  }
};

useEffect(() => {
  sumaBi7();
}, [WorCap7,margCAB7]);


const sumaBi8 = () => {
  try {
   
    const result = eval(`  (${WorCap8 || 0} - ${margCAB8 || 0})  `);
    setaBi8(result);
  } catch (error) {
    setaBi8("Input all ");  
  }
};

useEffect(() => {
  sumaBi8();
}, [WorCap8,margCAB8]);

const sumaCii1 = () => {
  try {
   
    const result = eval(`  (${WorCap1 || 0} - ${NewoCa1 || 0}) `);
    setaCii1(result);
  } catch (error) {
    setaCii1("Input all ");  
  }
};

useEffect(() => {
  sumaCii1();
}, [WorCap1,NewoCa1]);



const sumaCii2 = () => {
  try {
   
    const result = eval(`  (${WorCap2 || 0} - ${NewoCa2 || 0}) `);
    setaCii2(result);
  } catch (error) {
    setaCii2("Input all ");  
  }
};

useEffect(() => {
  sumaCii2();
}, [WorCap2,NewoCa2]);

const sumaCii3 = () => {
  try {
   
    const result = eval(`  (${WorCap3 || 0} - ${NewoCa3 || 0}) `);
    setaCii3(result);
  } catch (error) {
    setaCii3("Input all ");  
  }
};

useEffect(() => {
  sumaCii3();
}, [WorCap3,NewoCa3]);

const sumaCii4 = () => {
  try {
   
    const result = eval(`  (${WorCap4 || 0} - ${NewoCa4 || 0}) `);
    setaCii4(result);
  } catch (error) {
    setaCii4("Input all ");  
  }
};

useEffect(() => {
  sumaCii4();
}, [WorCap4,NewoCa4]);

const sumaCii5 = () => {
  try {
   
    const result = eval(`  (${WorCap5 || 0} - ${NewoCa5 || 0}) `);
    setaCii5(result);
  } catch (error) {
    setaCii5("Input all ");  
  }
};

useEffect(() => {
  sumaCii5();
}, [WorCap5,NewoCa5]);

const sumaCii6 = () => {
  try {
   
    const result = eval(`  (${WorCap6 || 0} - ${NewoCa6 || 0}) `);
    setaCii6(result);
  } catch (error) {
    setaCii6("Input all ");  
  }
};

useEffect(() => {
  sumaCii6();
}, [WorCap6,NewoCa6]);

const sumaCii7 = () => {
  try {
   
    const result = eval(`  (${WorCap7 || 0} - ${NewoCa7 || 0}) `);
    setaCii7(result);
  } catch (error) {
    setaCii7("Input all ");  
  }
};

useEffect(() => {
  sumaCii7();
}, [WorCap7,NewoCa7]);

const sumaCii8 = () => {
  try {
   
    const result = eval(`  (${WorCap8 || 0} - ${NewoCa8 || 0}) `);
    setaCii8(result);
  } catch (error) {
    setaCii8("Input all ");  
  }
};

useEffect(() => {
  sumaCii8();
}, [WorCap8,NewoCa8]);



const sumMpBf1 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap1 || 0} -  (${margCAB1 || 0} `),   eval(`(${WorCap1 || 0} -  (${NewoCa1 || 0} `)) ;
  
  
    setMpBf1(result);
  } catch (error) {
    setMpBf1("Input all ");  
  }
};

useEffect(() => {
  sumMpBf1();
}, [WorCap1,margCAB1,NewoCa1]);


const sumMpBf2 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap2 || 0} -  (${margCAB2 || 0} `),   eval(`(${WorCap2 || 0} -  (${NewoCa2 || 0} `)) ;
  
  
    setMpBf2(result);
  } catch (error) {
    setMpBf2("Input all ");  
  }
};

useEffect(() => {
  sumMpBf2();
}, [WorCap2,margCAB2,NewoCa2]);


const sumMpBf3 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap3 || 0} -  (${margCAB3 || 0} `),   eval(`(${WorCap3 || 0} -  (${NewoCa3 || 0} `)) ;
  
  
    setMpBf3(result);
  } catch (error) {
    setMpBf3("Input all ");  
  }
};

useEffect(() => {
  sumMpBf3();
}, [WorCap3,margCAB3,NewoCa3]);


const sumMpBf4 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap4 || 0} -  (${margCAB4 || 0} `),   eval(`(${WorCap4 || 0} -  (${NewoCa4 || 0} `)) ;
  
  
    setMpBf4(result);
  } catch (error) {
    setMpBf4("Input all ");  
  }
};

useEffect(() => {
  sumMpBf4();
}, [WorCap4,margCAB4,NewoCa4]);


const sumMpBf5 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap5 || 0} -  (${margCAB5 || 0} `),   eval(`(${WorCap5 || 0} -  (${NewoCa5 || 0} `)) ;
  
  
    setMpBf5(result);
  } catch (error) {
    setMpBf5("Input all ");  
  }
};

useEffect(() => {
  sumMpBf5();
}, [WorCap5,margCAB5,NewoCa5]);


const sumMpBf6 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap6 || 0} -  (${margCAB6 || 0} `),   eval(`(${WorCap6 || 0} -  (${NewoCa6 || 0} `)) ;
  
  
    setMpBf6(result);
  } catch (error) {
    setMpBf6("Input all ");  
  }
};

useEffect(() => {
  sumMpBf6();
}, [WorCap6,margCAB6,NewoCa6]);


const sumMpBf7 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap7 || 0} -  (${margCAB7 || 0} `),   eval(`(${WorCap7 || 0} -  (${NewoCa7 || 0} `)) ;
  
  
    setMpBf7(result);
  } catch (error) {
    setMpBf7("Input all ");  
  }
};

useEffect(() => {
  sumMpBf7();
}, [WorCap7,margCAB7,NewoCa7]);


const sumMpBf8 = () => {
  try {
   
    const result = Math.min(  eval(`(${WorCap8 || 0} -  (${margCAB8 || 0} `),   eval(`(${WorCap8 || 0} -  (${NewoCa8 || 0} `)) ;
  
  
    setMpBf8(result);
  } catch (error) {
    setMpBf8("Input all ");  
  }
};

useEffect(() => {
  sumMpBf8();
}, [WorCap8,margCAB8,NewoCa8]);




const sumShInNwc1 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa1 || 0} -  (${margCAB1 || 0} `),   0) ;

    setShInNwc1(result);
  } catch (error) {
    setShInNwc1("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc1();
}, [NewoCa1,margCAB1]);

const sumShInNwc2 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa2 || 0} -  (${margCAB2 || 0} `),   0) ;

    setShInNwc2(result);
  } catch (error) {
    setShInNwc2("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc2();
}, [NewoCa2,margCAB2]);


const sumShInNwc3 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa3 || 0} -  (${margCAB3 || 0} `),   0) ;

    setShInNwc3(result);
  } catch (error) {
    setShInNwc3("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc3();
}, [NewoCa3,margCAB3]);


const sumShInNwc4 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa4 || 0} -  (${margCAB4 || 0} `),   0) ;

    setShInNwc4(result);
  } catch (error) {
    setShInNwc4("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc4();
}, [NewoCa4,margCAB4]);


const sumShInNwc5 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa5 || 0} -  (${margCAB5 || 0} `),   0) ;

    setShInNwc5(result);
  } catch (error) {
    setShInNwc5("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc5();
}, [NewoCa5,margCAB5]);


const sumShInNwc6 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa6 || 0} -  (${margCAB6 || 0} `),   0) ;

    setShInNwc6(result);
  } catch (error) {
    setShInNwc6("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc6();
}, [NewoCa6,margCAB6]);


const sumShInNwc7 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa7 || 0} -  (${margCAB7 || 0} `),   0) ;

    setShInNwc7(result);
  } catch (error) {
    setShInNwc7("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc7();
}, [NewoCa7,margCAB7]);


const sumShInNwc8 = () => {
  try {   

  const result = Math.min(  eval(`(${NewoCa8 || 0} -  (${margCAB8 || 0} `),   0) ;

    setShInNwc8(result);
  } catch (error) {
    setShInNwc8("Input all ");  
  }
};

useEffect(() => {
  sumShInNwc8();
}, [NewoCa8,margCAB8]);





const sumMarg1 = () => {
  try {
   
    const result = eval(`  (${NetFiAs1 || 0}  ${TerLoa1 || 0}) `);
    setMarg1(result);
  } catch (error) {
    setMarg1("Input all ");  
  }
};

useEffect(() => {
  sumMarg1();
}, [NetFiAs1,TerLoa1]);


const sumMarg2 = () => {
  try {
   
    const result = eval(`  (${NetFiAs2 || 0}  ${TerLoa2 || 0}) `);
    setMarg2(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumMarg2();
}, [NetFiAs2,TerLoa2]);


const sumMarg3 = () => {
  try {
   
    const result = eval(`  (${NetFiAs3 || 0}  ${TerLoa3 || 0}) `);
    setMarg3(result);
  } catch (error) {
    setMarg3("Input all ");  
  }
};

useEffect(() => {
  sumMarg3();
}, [NetFiAs3,TerLoa3]);


const sumMarg4 = () => {
  try {
   
    const result = eval(`  (${NetFiAs4 || 0}  ${TerLoa4 || 0}) `);
    setMarg4(result);
  } catch (error) {
    setMarg4("Input all ");  
  }
};

useEffect(() => {
  sumMarg4();
}, [NetFiAs4,TerLoa4]);


const sumMarg5 = () => {
  try {
   
    const result = eval(`  (${NetFiAs5 || 0}  ${TerLoa5 || 0}) `);
    setMarg5(result);
  } catch (error) {
    setMarg5("Input all ");  
  }
};

useEffect(() => {
  sumMarg5();
}, [NetFiAs5,TerLoa5]);


const sumMarg6 = () => {
  try {
   
    const result = eval(`  (${NetFiAs6 || 0}  ${TerLoa6 || 0}) `);
    setMarg6(result);
  } catch (error) {
    setMarg6("Input all ");  
  }
};

useEffect(() => {
  sumMarg6();
}, [NetFiAs6,TerLoa6]);


const sumMarg7 = () => {
  try {
   
    const result = eval(`  (${NetFiAs7 || 0}  ${TerLoa7 || 0}) `);
    setMarg7(result);
  } catch (error) {
    setMarg7("Input all ");  
  }
};

useEffect(() => {
  sumMarg7();
}, [NetFiAs7,TerLoa7]);


const sumMarg8 = () => {
  try {
   
    const result = eval(`  (${NetFiAs8 || 0}  ${TerLoa8 || 0}) `);
    setMarg8(result);
  } catch (error) {
    setMarg8("Input all ");  
  }
};

useEffect(() => {
  sumMarg8();
}, [NetFiAs8,TerLoa8]);




const sumSecMar1 = () => {
  try {
    let result;
    if ({Marg1} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg1 || 0} / ${NetFiAs1 || 0})  *100`);

    }
    setSecMar1(result);
  } catch (error) {
    setSecMar1("Input all ");
  }
};

useEffect(() => {
  sumSecMar1();
}, [Marg1,NetFiAs1]);

const sumSecMar2 = () => {
  try {
    let result;
    if ({Marg2} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg2 || 0} / ${NetFiAs2 || 0})  *100`);

    }
    setSecMar2(result);
  } catch (error) {
    setSecMar2("Input all ");
  }
};

useEffect(() => {
  sumSecMar2();
}, [Marg2,NetFiAs2]);

const sumSecMar3 = () => {
  try {
    let result;
    if ({Marg3} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg3 || 0} / ${NetFiAs3 || 0})  *100`);

    }
    setSecMar3(result);
  } catch (error) {
    setSecMar3("Input all ");
  }
};

useEffect(() => {
  sumSecMar3();
}, [Marg3,NetFiAs3]);

const sumSecMar4 = () => {
  try {
    let result;
    if ({Marg4} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg4 || 0} / ${NetFiAs4 || 0})  *100`);

    }
    setSecMar4(result);
  } catch (error) {
    setSecMar4("Input all ");
  }
};

useEffect(() => {
  sumSecMar4();
}, [Marg4,NetFiAs4]);

const sumSecMar5 = () => {
  try {
    let result;
    if ({Marg5} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg5 || 0} / ${NetFiAs5 || 0})  *100`);

    }
    setSecMar5(result);
  } catch (error) {
    setSecMar5("Input all ");
  }
};

useEffect(() => {
  sumSecMar5();
}, [Marg5,NetFiAs5]);

const sumSecMar6 = () => {
  try {
    let result;
    if ({Marg6} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg6 || 0} / ${NetFiAs6 || 0})  *100`);

    }
    setSecMar6(result);
  } catch (error) {
    setSecMar6("Input all ");
  }
};

useEffect(() => {
  sumSecMar6();
}, [Marg6,NetFiAs6]);

const sumSecMar7 = () => {
  try {
    let result;
    if ({Marg7} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg7 || 0} / ${NetFiAs7 || 0})  *100`);

    }
    setSecMar7(result);
  } catch (error) {
    setSecMar7("Input all ");
  }
};

useEffect(() => {
  sumSecMar7();
}, [Marg7,NetFiAs7]);

const sumSecMar8 = () => {
  try {
    let result;
    if ({Marg8} < 1) {
      result = 0;
    } else {
      result = eval(`  (${Marg8 || 0} / ${NetFiAs8 || 0})  *100`);

    }
    setSecMar8(result);
  } catch (error) {
    setSecMar8("Input all ");
  }
};

useEffect(() => {
  sumSecMar8();
}, [Marg8,NetFiAs8]);






const sumFiAsCoRa1 = () => {
  try {
   
    const result = eval(`  (${NetFiAs1 || 0} / ${TerLoa1 || 0}) `);
    setFiAsCoRa1(result);
  } catch (error) {
    setFiAsCoRa1("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa1();
}, [NetFiAs1,TerLoa1]);


const sumFiAsCoRa2 = () => {
  try {
   
    const result = eval(`  (${NetFiAs2 || 0} / ${TerLoa2 || 0}) `);
    setFiAsCoRa2(result);
  } catch (error) {
    setFiAsCoRa2("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa2();
}, [NetFiAs2,TerLoa2]);


const sumFiAsCoRa3 = () => {
  try {
   
    const result = eval(`  (${NetFiAs3 || 0} / ${TerLoa3 || 0}) `);
    setFiAsCoRa3(result);
  } catch (error) {
    setFiAsCoRa3("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa3();
}, [NetFiAs3,TerLoa3]);


const sumFiAsCoRa4 = () => {
  try {
   
    const result = eval(`  (${NetFiAs4 || 0} / ${TerLoa4 || 0}) `);
    setFiAsCoRa4(result);
  } catch (error) {
    setFiAsCoRa4("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa4();
}, [NetFiAs4,TerLoa4]);


const sumFiAsCoRa5 = () => {
  try {
   
    const result = eval(`  (${NetFiAs5 || 0} / ${TerLoa5 || 0}) `);
    setFiAsCoRa5(result);
  } catch (error) {
    setFiAsCoRa5("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa5();
}, [NetFiAs5,TerLoa5]);



const sumFiAsCoRa6 = () => {
  try {
   
    const result = eval(`  (${NetFiAs6 || 0} / ${TerLoa6 || 0}) `);
    setFiAsCoRa6(result);
  } catch (error) {
    setFiAsCoRa6("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa6();
}, [NetFiAs6,TerLoa6]);



const sumFiAsCoRa7 = () => {
  try {
   
    const result = eval(`  (${NetFiAs7 || 0} / ${TerLoa7 || 0}) `);
    setFiAsCoRa7(result);
  } catch (error) {
    setFiAsCoRa7("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa7();
}, [NetFiAs7,TerLoa7]);


const sumFiAsCoRa8 = () => {
  try {
   
    const result = eval(`  (${NetFiAs8 || 0} / ${TerLoa8 || 0}) `);
    setFiAsCoRa8(result);
  } catch (error) {
    setFiAsCoRa8("Input all ");  
  }
};

useEffect(() => {
  sumFiAsCoRa8();
}, [NetFiAs8,TerLoa8]);


const valIfCaAc1 = () => {
  try {

    
    const result = Diff1 > 0 ? "Yes" : "No";
    setIfCaAc1(result);
  } catch (error) {
    setIfCaAc1(" "); 
  }
};

useEffect(() => {
  valIfCaAc1();
}, [Diff1]);


const valIfCaAc2 = () => {
  try {

    
    const result = Diff2 > 0 ? "Yes" : "No";
    setIfCaAc2(result);
  } catch (error) {
    setIfCaAc2(" "); 
  }
};

useEffect(() => {
  valIfCaAc2();
}, [Diff2]);



const valIfCaAc3 = () => {
  try {

    
    const result = Diff3 > 0 ? "Yes" : "No";
    setIfCaAc3(result);
  } catch (error) {
    setIfCaAc3(" "); 
  }
};

useEffect(() => {
  valIfCaAc3();
}, [Diff3]);



const valIfCaAc4 = () => {
  try {

    
    const result = Diff4 > 0 ? "Yes" : "No";
    setIfCaAc4(result);
  } catch (error) {
    setIfCaAc4(" "); 
  }
};

useEffect(() => {
  valIfCaAc4();
}, [Diff4]);


const valIfCaAc5 = () => {
  try {

    
    const result = Diff5 > 0 ? "Yes" : "No";
    setIfCaAc5(result);
  } catch (error) {
    setIfCaAc5(" "); 
  }
};

useEffect(() => {
  valIfCaAc5();
}, [Diff5]);


const valIfCaAc6 = () => {
  try {

    
    const result = Diff6 > 0 ? "Yes" : "No";
    setIfCaAc6(result);
  } catch (error) {
    setIfCaAc6(" "); 
  }
};

useEffect(() => {
  valIfCaAc6();
}, [Diff6]);


const valIfCaAc7 = () => {
  try {

    
    const result = Diff7 > 0 ? "Yes" : "No";
    setIfCaAc7(result);
  } catch (error) {
    setIfCaAc7(" "); 
  }
};

useEffect(() => {
  valIfCaAc7();
}, [Diff7]);


const valIfCaAc8 = () => {
  try {

    
    const result = Diff8 > 0 ? "Yes" : "No";
    setIfCaAc8(result);
  } catch (error) {
    setIfCaAc8(" "); 
  }
};

useEffect(() => {
  valIfCaAc8();
}, [Diff8]);



const sumDiff1 = () => {
  try {
   
    const result = Math.round ({NeCaAcc1} - {TlInst1}).toFixed(2) ;
    setDiff1(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff1();
}, [NeCaAcc1,TlInst1]);


  

const sumDiff2 = () => {
  try {
   
    const result = Math.round ({NeCaAcc2} - {TlInst2}).toFixed(2) ;
    setDiff2(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff2();
}, [NeCaAcc2,TlInst2]);

const sumDiff3 = () => {
  try {
   
    const result = Math.round ({NeCaAcc3} - {TlInst3}).toFixed(2) ;
    setDiff3(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff3();
}, [NeCaAcc3,TlInst3]);

const sumDiff4 = () => {
  try {
   
    const result = Math.round ({NeCaAcc4} - {TlInst4}).toFixed(2) ;
    setDiff4(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff4();
}, [NeCaAcc4,TlInst4]);

const sumDiff5 = () => {
  try {
   
    const result = Math.round ({NeCaAcc5} - {TlInst5}).toFixed(2) ;
    setDiff5(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff5();
}, [NeCaAcc5,TlInst5]);

const sumDiff6 = () => {
  try {
   
    const result = Math.round ({NeCaAcc6} - {TlInst6}).toFixed(2) ;
    setDiff6(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff6();
}, [NeCaAcc6,TlInst6]);

const sumDiff7 = () => {
  try {
   
    const result = Math.round ({NeCaAcc7} - {TlInst7}).toFixed(2) ;
    setDiff7(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff7();
}, [NeCaAcc7,TlInst7]);

const sumDiff8 = () => {
  try {
   
    const result = Math.round ({NeCaAcc8} - {TlInst8}).toFixed(2) ;
    setDiff8(result);
  } catch (error) {
    setMarg2("Input all ");  
  }
};

useEffect(() => {
  sumDiff8();
}, [NeCaAcc8,TlInst8]);


const sumGrFiAsTe1 = () => {
  try {
   
    const result = eval(`  (${GroBlo1 || 0} / ${TerLoa1 || 0}) `);
    setGrFiAsTe1(result);
  } catch (error) {
    setGrFiAsTe1("Input all ");  
  }
};

useEffect(() => {
  sumGrFiAsTe1();
}, [GroBlo1,TerLoa1]);

const sumGrFiAsTe2 = () => {
    try {
     
      const result = eval(`  (${GroBlo2 || 0} / ${TerLoa2 || 0}) `);
      setGrFiAsTe2(result);
    } catch (error) {
      setGrFiAsTe2("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe2();
  }, [GroBlo2,TerLoa2]);

  const sumGrFiAsTe3 = () => {
    try {
     
      const result = eval(`  (${GroBlo3 || 0} / ${TerLoa3 || 0}) `);
      setGrFiAsTe3(result);
    } catch (error) {
      setGrFiAsTe3("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe3();
  }, [GroBlo3,TerLoa3]);

  const sumGrFiAsTe4 = () => {
    try {
     
      const result = eval(`  (${GroBlo4 || 0} / ${TerLoa4 || 0}) `);
      setGrFiAsTe4(result);
    } catch (error) {
      setGrFiAsTe4("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe4();
  }, [GroBlo4,TerLoa4]);

  const sumGrFiAsTe5 = () => {
    try {
     
      const result = eval(`  (${GroBlo5 || 0} / ${TerLoa5 || 0}) `);
      setGrFiAsTe5(result);
    } catch (error) {
      setGrFiAsTe5("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe5();
  }, [GroBlo5,TerLoa5]);

  const sumGrFiAsTe6 = () => {
    try {
     
      const result = eval(`  (${GroBlo6 || 0} / ${TerLoa6 || 0}) `);
      setGrFiAsTe6(result);
    } catch (error) {
      setGrFiAsTe6("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe6();
  }, [GroBlo6,TerLoa6]);

  const sumGrFiAsTe7 = () => {
    try {
     
      const result = eval(`  (${GroBlo7 || 0} / ${TerLoa7 || 0}) `);
      setGrFiAsTe7(result);
    } catch (error) {
      setGrFiAsTe7("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe7();
  }, [GroBlo7,TerLoa7]);

  const sumGrFiAsTe8 = () => {
    try {
     
      const result = eval(`  (${GroBlo8 || 0} / ${TerLoa8 || 0}) `);
      setGrFiAsTe8(result);
    } catch (error) {
      setGrFiAsTe8("Input all ");  
    }
  };
  
  useEffect(() => {
    sumGrFiAsTe8();
  }, [GroBlo8,TerLoa8]);
  
  
  
  
  
  
  
  



























































































































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
             V -  WC / TL ASSESSMENT
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
          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              W C ASSESSMENT
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              CURRENT ASSETS 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Raw Materials
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {raMa1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {raMa2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {raMa3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {raMa4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { raMa5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {raMa6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              { raMa7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {raMa8} 
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's consumption)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MonCon2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCon8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Stock - in - process
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {stkInPr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {stkInPr8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's  Cost of Production)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MoCoPr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCoPr8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Finished Goods
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {FinishGo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FinishGo8}
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
              {MonCoSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonCoSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Other consumable spares
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {conSuSp2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {conSuSp8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              (month's consumption)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MoCons2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MoCons8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL  INVENTORY
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
              {TotInv4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TotInv8}
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
              {Reci1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {Reci2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Reci3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Reci8}
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
              {MonGrSa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonGrSa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Other Current Assets
            </Col>

            <Col className=" border borde??r-solid  flex items-center justify-center">
              {ToOtCuAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOtCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOTAL CHARGEABLE CA
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { ToChca1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToChca2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToChca8}
            </Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              CL OTHER THAN BANK BORROWINGS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TRADE  CREDITORS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {SunCrTr2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SunCrTr8}
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
              {MonPur1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MonPur2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MonPur8}
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Other Current Liabilities
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOtCuLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              TOTAL  LIABILITIES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLiab2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLiab8}
            </Col>
          </Row>

          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              Working Capital Gap  (A )
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {WorCap2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WorCap8}
            </Col>
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              25% Margin on  C  A (B)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {margCAB2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {margCAB8}
            </Col>
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              Actual/Projected N W C ( C )
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              A - B  (I)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {aBi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {aBi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {aBi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aBi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aBi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aBi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aBi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aBi8}
            </Col>
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              A - C (II)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {aCii1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {aCii2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {aCii3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aCii4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aCii5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aCii6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aCii7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {aCii8}
            </Col>
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              M P B F (Lower of I or II)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {MpBf2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {MpBf8}
            </Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              Excess borrowings representing
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l font-bold px-28 py-2 "
              lg="4"
            >
              Shortfall in NWC
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ShInNwc2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ShInNwc8}
            </Col>
          </Row>

          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              FIXED  ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              Margin of Security
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Gross Fixed Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {GroBlo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
               WDV of Fixed Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetFiAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs7}
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
              Term Loan O/s
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
            <Col className=" border border-solid  flex items-center justify-center">
              {TerLoa8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Gross Fixed Assets/ Term Loan O/s
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {GrFiAsTe2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GrFiAsTe8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               Margin 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Marg1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {Marg2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Marg3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marg4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marg5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marg6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marg7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Marg8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Security Margin
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {SecMar2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {SecMar8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Average Security Margin
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {costsales3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fixed Asset Coverage Ratio
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {FiAsCoRa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {FiAsCoRa8}
            </Col>
          </Row>


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              IF Cash accrual &gt;  TL Installment
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {IfCaAc2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {IfCaAc8}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2"
              lg="4"
            >
              Cash Accrual
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


          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TL Installment
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {TlInst2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst4}
          </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {TlInst8}
            </Col>
          </Row>

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Difference
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Diff1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {Diff2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {Diff3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Diff4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Diff5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Diff6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Diff7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {Diff8}
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Net DSCR
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre1}
                // onChange={(e) => setdePre1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre2}
                // onChange={(e) => setdePre2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre3}
                // onChange={(e) => setdePre3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre4}
                // onChange={(e) => setdePre4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre5}
                // onChange={(e) => setdePre5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre6}
                // onChange={(e) => setdePre6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre7}
                // onChange={(e) => setdePre7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre8}
                // onChange={(e) => setdePre8(e.target.value)}
              />
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

export default WctLassmt
