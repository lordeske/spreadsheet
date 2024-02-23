const range = (start, end) => Array(end-start+1).fill(start).map((element, index)=> element + index);



window.onload = () => {

    const container = document.getElementById("container").value;

    const createLabel = (name) => {

        const label = document.createElement("div");

        label.className = "label";
        label.textContent= name;


        container.appendChild(label);

    }

}



