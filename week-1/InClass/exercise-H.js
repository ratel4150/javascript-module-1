function getMeasuresRectangle(base,height,width){
    let perimeter=2*base+2*height;
    let area=base*height;
    let volume=width*base*height;
    
    let setMeasuresRectangle="The perimeter of the rectangle is: "
    + perimeter +"\n" +
    "The area of the rectangle is : "
    + area +"\n" +
    "The volume of the rectangle is: " +volume;
    
    return setMeasuresRectangle;
  
  
  
  }
  console.log(getMeasuresRectangle(4,5,6))
  