function pictureNumber() { 
  const number = document.getElementById("number").value; 

  if (number == "1") { 
    document.getElementById("pic").src = "Media/Som.avif"; 
  } else if (number == "2") { 
    document.getElementById("pic").src = "Media/Tin.avif"; 
  } else if (number == "3") { 
    document.getElementById("pic").src = "Media/Pfn.avif"; 
  }
   else { 
    document.getElementById("pic").src = "Media/Lovebirds.avif"; 
  } 
}