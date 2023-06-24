// Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result 

const studentData = [
    {
        id : 1,
        name: "Rakib",
        roll: 5,
        class: "five",
        subNmber: {
            ban: 25,
            eng: 85,
            math: 95,
            ss: 54,
            gs: 75,
            reli: 45
        }
    }
];
const {id, name, roll, class } = studentData




// gpa and gread function
const getGpa = (mark) => {
    let gpa;
    let gread;

    if( mark >= 0 && mark < 33 ){
        gread = "F"
        gpa = 0;
    }else if( mark >= 33 & mark < 40){
        gread = "D"
        gpa = 1;
    }else if( mark >= 40 & mark < 50){
        gread = "C"
        gpa = 2;
    }else if( mark >= 50 & mark < 60){
        gread = "B"
        gpa = 3;
    }else if( mark >= 60 & mark < 70){
        gread = "A-"
        gpa = 3.5;
    }else if( mark >= 70 & mark < 80){
        gread = "A"
        gpa = 4;
    }else if( mark >= 80 & mark <= 100){
        gread = "A+"
        gpa = 5;
    }else{
        gread = "Invalid"
        gpa = "Invalid";
    };

    return { gpa: gpa, gread: gread}
};




studentData.map((item) => {
    console.log(`
    Student name : ${item.name}
    Roll: ${item.roll}
    Class: ${item.class}
    `)
    
})



