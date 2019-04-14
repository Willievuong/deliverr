var match = (package, user) => {
  if(package['Package Location A'].localeCompare(user['UserDestinationA']) && package['Package Location B'].localeCompare(user['UserDestinationB'])){
    return true; 
  }
  return false;
} 


export {match}

