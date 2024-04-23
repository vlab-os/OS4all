var slide_num = 0;
var next_slide_num = slide_num + 1;
var prev_slide_num = 0;

// Dictionary of slide headings and content

const slide_contents = [
    {
        silde: "0",
        heading: "What is context switching?",
        content: "Context switching is a fundamental operation in modern operating systems that occurs when a multitasking operating system switches the execution content from one proess or thread to another. <br><br>Context switching is a part of process management subsystem.",
        img_src: "./slide_images/slide_1.png",
    },
    {
        slide: "1",
        heading: "What is context?",
        content: "Context refers to the current execution state and information associated with a running process in an operating system.<br><br>It represents a snapshot of the process’s execution at a particular point in time.<br><br>Process context can change dynamically while the process is executing on the CPU.<br><br>During a context switch, the current context of the process is stored in a data structure called 'Process Control block' which is later used to retreive the information of the process and resume it's excution from where it was interrupted.",
        img_src: "./slide_images/slide_2.png",
    },
    {
        slide: "2",
        heading: "What is PCB?",
        content: "In order to virtualize the execution of a process, the OS needs to have an internal account of the state of a process. <br><br>This representation of the state of a process is stored in memory as Process Control Block(PCB).<br><br>The PCB is used primarily during context switches, but it doesn't actively reflect the process's changing context while it's running. Instead, the changing process context is stored in various CPU registers and memory locations, not within the PCB.",
        img_src: "./slide_images/slide_3.png",
    },
    {
        slide: "3",
        heading: "Why do we need context switching?",
        content: "Some processes may consume more time than expected, and hence delay the execution of other processes waiting. <br><br>With the help of context switching, CPU can switch between multiple processes, creating an illusion of each process having its own CPU which maximises the CPU utilization.",
        img_src: "./slide_images/slide_4.png"
    },
    {
        slide: "4",
        heading: "When does context switching happen?",
        content: "<ol><li>Interrupt Handling<br><ul><b>Hardware interrupts</b><li>Timer interrupt</li><li>Hardware interrupts generated by external I/O devices such as keyboard, mouse, or network interfaces.</li></ul><ul><b>Software interrupts</b><li>Syscalls - Generated by software to request service form the OS.</li><li>Exception Handling - Divide by zero error, page faults etc.</ul></li><li>Scheduling<ul><li>Time slicing</li><li>Preemption</li></ul></li></ol>",
        img_src: "./slide_images/slide_5.png",
    },
    {
        slide: "5",
        heading: "How does context switching happen?",
        content: "CPU alone cannot switch to another process on arrival of an interrupt or process termination. And neither does the user have such privileges to do that.<br><br>This is where two other actors come into play apart from the user.<ul><li>Hardware</li><li>Kernel</li></ul>",
        img_src: "./slide_images/slide_6.png",
    },
    {
        slide: "6",
        heading: "What is user mode?",
        content: "User applications run in user mode. In this mode, processes have restricted access to system resources and cannot directly perform privileged operations. <br><br>It cannot directly access or modify hardware resources or perform critical system tasks.",
        img_src: "./slide_images/slide_7.png",
    },
    {
        slide: "7",
        heading: "What is kernel mode?",
        content: "Kernel mode is where the core OS functions, such as device management, memory management, and system call handling, take place. <br><br>Only code running in kernel mode can execute privileged operations and directly control hardware resources. <br><br>It has unrestricted access to the CPU, memory, hardware devices, and system services.",
        img_src: "./slide_images/slide_8.png",
    },
    {
        slide: "8",
        heading: "What does the hardware do?",
        content: "Someone has to help the CPU to change it’s mode from user to kernel to execute the kernel processes. <br><br>Hardware is the one responsible for this change in mode.<br><br>The CPU remains idle during the time hardware is working to change the mode.",
        img_src: "./slide_images/slide_9.png",
    },
    {
        slide: "9",
        heading: "What else does the hardware do?",
        content: "Just shifting the mode is not enough. <br><br>Hardware also have to provide necessary information to the kernel when shifting from user mode to kernel mode and vice versa. <br><br>This means that hardware has to give information to the kernel without disturbing the user. Hardware uses <b>K-stack</b> to do that.",
        img_src: "./slide_images/slide_10.png",
    },
    {
        slide: "10",
        heading: "What is kernel stack?",
        content: "<b>Purpose:</b> The K-stack is exclusively used by the kernel when processing system calls, interrupts and exceptions.<br><br><b>Location:</b> Each process has its own K-stack, typically located in kernel memory. The kernel stack of a process is different from its user stack.<br><br><b>Access:</b> User level code cannot directly access the K-stack of a process. It’s a part of kernel’s internal data structures",
    },
    {
        slide: "11",
        heading: "What is user stack?",
        content: "<b>Purpose:</b> The user stack is used by a process to manage function calls and local variables with in the user level code.<br><br><b>Location:</b> This is located in the process memory space, typically allocated in user portion of memory.<br><br><b>Access:</b> User level code has direct access to its user stack.",
    },
    {
        slide: "12",
        heading: "Where does the kernel store the process information?",
        content: "The kernel does it’s job of dealing with interrupts and syscalls. <br><br>But where does it store the data of the process after handling the traps and interrupts? It is has to store it somewhere before giving  new process to the CPU, right?<br><br>The process information is stored in a data structure named Process Control block (PCB). Only kernel can update and retrieve information from this.",
    },
    {
        slide: "13",
        heading: "Mechanism of context switching?",
        content: "The entire mechanism of context switching can be viewed at three different stages.<ol><li>User mode</li><li>Hardware</li><li>Kernel level</li></ol>",
        img_src: "./slide_images/slide_14.png",
    }
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