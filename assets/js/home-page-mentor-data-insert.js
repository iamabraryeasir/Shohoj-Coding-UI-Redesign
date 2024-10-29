document.addEventListener("DOMContentLoaded", () => {
    const mentorCardContainer = document.getElementById(
        "mentor-card-container"
    );
    const mentorCardTemplate = document.getElementById("mentor-card-template");

    // mentors data
    const mentorsData = [
        {
            name: "Shakhawat Hossain",
            designation: "Sr. Software Engineer @ Bjit",
            imgUrl: "image_1.png",
        },
        {
            name: "Amit Roy",
            designation: "App Developer Intern @ Simec System LTD",
            imgUrl: "image_2.png",
        },
        {
            name: "Fuadul Hasan",
            designation: "Associate Software Engineer @ Brain Station 23",
            imgUrl: "image_3.png",
        },
        {
            name: "Md. Kamrul Hasan",
            designation: "Jr. Software Engineer @ WPXPO",
            imgUrl: "image_4.png",
        },
        {
            name: "Ashikur Rahman",
            designation: "Software Engineer @ SAMSUNG",
            imgUrl: "image_5.png",
        },
        {
            name: "Emrul Hasan Emon",
            designation: "Associate Software Engineer @ Kaz Software",
            imgUrl: "image_6.png",
        },
        {
            name: "Md. Sajjat Hossen",
            designation: "Associate Software Engineer @ Brain Station 23",
            imgUrl: "image_7.png",
        },
        {
            name: "Nishi Kanta Paul",
            designation: "Intern Software Engineer @ Appifylab",
            imgUrl: "image_8.png",
        },
        {
            name: "Md. Farhan Yousuf",
            designation: "Candidate Master @ Codeforces",
            imgUrl: "image_9.png",
        },
        {
            name: "Mst. Shimla Sinthia",
            designation: "Expert @ Codeforces",
            imgUrl: "image_10.png",
        },
        {
            name: "Md. Atik Hasan",
            designation: "Mentor @ Shohoj Coding",
            imgUrl: "image_11.png",
        },
        {
            name: "Rohul Amin Labid",
            designation:
                "Lecturer @ Bangladesh Army University of Science & Technology",
            imgUrl: "image_12.png",
        },
        {
            name: "Tasfia Tabassum",
            designation: "Teaching Assistant, Dept. of CSE, IIUC",
            imgUrl: "image_13.png",
        },
        {
            name: "Md. Liad Hossain",
            designation: "Jr. Software Engineer @ Alice Labs PTE LTD.",
            imgUrl: "image_14.png",
        },
        {
            name: "Md. Saidul Islam",
            designation: "Expert @ Codeforces",
            imgUrl: "image_15.png",
        },
        {
            name: "Toufik Islam",
            designation: "Expert @ Codeforces",
            imgUrl: "image_16.png",
        },
    ];

    // rendering mentor cards
    mentorsData.forEach((mentor) => {
        const mentorCard = mentorCardTemplate.content.cloneNode(true);

        mentorCard
            .querySelector("#mentor-image")
            .setAttribute("src", `./assets/images/mentors/${mentor.imgUrl}`);

        mentorCard.querySelector("#mentor-name").textContent = mentor.name;

        mentorCard.querySelector("#mentor-designation").textContent =
            mentor.designation;

        mentorCardContainer.appendChild(mentorCard);
        console.log("Hello");
    });
});
