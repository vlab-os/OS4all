var slide_num = 0;
var next_slide_num = slide_num + 1;
var prev_slide_num = 0;

// Dictionary of slide headings and content

const slide_contents = [
    {
        silde: "0",
        heading: "What is a process?",
        content: "In the context of an operating system (OS), a process is a program in execution. It is an independent and dynamic entity that represents the execution of a computer program. <br><br> Each process has its own memory space, system resources, and state.",
        img_src: "./slide_images/",
    },
    {
        slide: "1",
        heading: "What are process states?",
        content: "As a process is executed, it undergoes a series of state changes that reflect the activity being performed by the user and the resources needed by the process. <br><br>The specific states and their corresponding names can vary between different operating systems and literature sources, as they are not standardized. <br><br>Nonetheless, the process state provides crucial information about the current status of a process and is used by the operating system to manage resources and scheduling.",
        img_src: "./slide_images/",
    },
    {
        slide: "2",
        heading: "What are the possible process states?",
        content: "The 4 main and most common states the process can exist as are: <br><br> <b>Ready:</b> A process in the ready state is one that is waiting to be executed by the CPU, but is currently not running.<br><br><b>Running:</b> When a process is executing instructions on the CPU, it is in the running state.<br><br> <b>Waiting:</b> If the process is in this state then it is waiting for either resources that it has requested for or waiting for a specific event to occur so that it can go back to ready state and wait for dispatching.<br><br><b>Terminated:</b> When a process has completed its execution or has been terminated by the operating system or by the user, it is in the terminated state.",
        img_src: "./slide_images/",
    },
    {
        slide: "3",
        heading: "What are the possible state transitions?",
        content: "Ready > Running (<b>Dispatch</b>)<br><br> Running > Ready (<b>Preempt</b>) <br><br> Running > Waiting (<b>Resources or Wait request</b>) <br><br> Waiting > Ready (<b>Request granted</b>) <br><br> Running > Terminated (<b>Terminate</b>)",
        img_src: "./slide_images/"
    },
    {
        slide: "4",
        heading: "Example of a process life cycle",
        content: "",
        img_src: "./slide_images/",
    },
];

function next_slide() {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("heading").innerHTML = slide_contents[next_slide_num].heading;

    document.getElementById("content").innerHTML = "";
    document.getElementById("content").innerHTML = slide_contents[next_slide_num].content;

    document.getElementById("pic").src = slide_contents[next_slide_num].img_src;

    slide_num = next_slide_num;
    next_slide_num = next_slide_num + 1;
    prev_slide_num = prev_slide_num + 1;
}

function prev_slide() {
    slide_num = prev_slide_num;
    next_slide_num = next_slide_num - 1;
    prev_slide_num = prev_slide_num - 1;

    document.getElementById("heading").innerHTML = "";
    document.getElementById("heading").innerHTML = slide_contents[prev_slide_num].heading;

    document.getElementById("content").innerHTML = "";
    document.getElementById("content").innerHTML = slide_contents[prev_slide_num].content;

    document.getElementById("pic").src = slide_contents[prev_slide_num].img_src;

}