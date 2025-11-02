const courses = [
    {
        image: "images/maths.jpg",
        title: "Математика",
        age: "3–7 років",
        tasks: ["Веселі задачі", "Логічне мислення", "Гра в цифри"]
    },
    {
        image: "images/english.jpg",
        title: "Англійська мова",
        age: "4–6 років",
        tasks: ["Алфавіт", "Основні фрази", "Ігри зі словами"]
    },
    {
        image: "images/science.jpg",
        title: "Природознавство",
        age: "5–10 років",
        tasks: ["Світ тварин", "Рослини", "Цікаві факти"]
    }

];

const container = document.getElementById("courses-container");

courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "div-card";

    const imgDiv = document.createElement("div");
    imgDiv.className = "div-card-img";

    const img = document.createElement("img");
    img.src = course.image;
    img.alt = course.title;

    imgDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.className = "div-card-info";

    const title = document.createElement("h1");
    title.textContent = course.title;

    const age = document.createElement("h2");
    age.textContent = `Вік ${course.age}`;

    const ul = document.createElement("ul");
    course.tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
    });

    infoDiv.appendChild(title);
    infoDiv.appendChild(age);
    infoDiv.appendChild(ul);

    card.appendChild(imgDiv);
    card.appendChild(infoDiv);

    container.appendChild(card);
});
