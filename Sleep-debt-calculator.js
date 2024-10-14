const getSleepHours = day => {
    switch (day) {
      case 'Monday':
      return 8;
      break;
      case 'Tuesday':
      return 6;
      break;
      case 'Wednesday':
      return 5;
      break;
      case 'Thursday':
      return 4;
      break;
      case 'Friday':
      return 7;
      break;
      case 'Saturday':
      return 3;
      break;
      case 'Sunday':
      return 9;
      break;
      default: 
      return 'Error';
    }
  }
  // using implicit return (Single line Block.)
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 5;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log('User got the perfect sleep')
    } else if(actualSleepHours > idealSleepHours) {
      console.log('User got ' + (actualSleepHours - idealSleepHours) + '  hrs more sleep than needed');
    } else {
      console.log('User should get some rest. Only slept for ' + (idealSleepHours - actualSleepHours) + ' hrs.');
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
