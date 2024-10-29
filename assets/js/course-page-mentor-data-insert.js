document.addEventListener("DOMContentLoaded", () => {
    const mentorCardContainer = document.getElementById(
        "mentor-card-container"
    );
    const mentorCardTemplate = document.getElementById("mentor-card-template");

    // mentors data
    const mentorsData = [
        {
            name: "Fuadul Hasan",
            designation: "Associate Software Engineer @ Brain Station 23",
            imgUrl: "image_3.png",
        },
        {
            name: "Amit Roy",
            designation: "App Developer Intern @ Simec System LTD",
            imgUrl: "image_2.png",
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
            name: "Ashikur Rahman",
            designation: "Software Engineer @ SAMSUNG",
            imgUrl: "image_5.png",
        },
        {
            name: "Md. Farhan Yousuf",
            designation: "Candidate Master @ Codeforces",
            imgUrl: "image_9.png",
        },
        {
            name: "Md. Liad Hossain",
            designation: "Jr. Software Engineer @ Alice Labs PTE LTD.",
            imgUrl: "image_14.png",
        },
        {
            name: "Mst. Shimla Sinthia",
            designation: "Expert @ Codeforces",
            imgUrl: "image_10.png",
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
            .setAttribute("src", `../assets/images/mentors/${mentor.imgUrl}`);

        mentorCard.querySelector("#mentor-name").textContent = mentor.name;

        mentorCard.querySelector("#mentor-designation").textContent =
            mentor.designation;

        mentorCardContainer.appendChild(mentorCard);
        console.log("Hello");
    });
});
