function studentsGradeGenerator(marks){


    if(isNaN(marks) || marks < 0 || marks > 100){
        console.log("Enter a number between 0 and 100")
    }else if (marks > 79) {
        console.log("Grade= A");

    }else if (marks >= 60){
        console.log("grade=B");

    }else if (marks >= 49){
        console.log("Grade = C");

    }else if (marks >= 40){
        console.log("Grade = D")

    }else {
        console.log("Grade = E")
    }
}
studentsGradeGenerator(34);
studentsGradeGenerator(88);

