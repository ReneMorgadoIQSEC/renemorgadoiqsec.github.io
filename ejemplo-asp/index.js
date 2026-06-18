document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("circle");
    const start = document.getElementById("start");
    const logo = document.getElementById("logo");
    const video = document.getElementById("video");
    const videoContainer = document.getElementById("video-container");
    const canvas = document.createElement("canvas");
    let stream = null;
    function actionListener(action, data) {
        if (action === "advise") {
            videoContainer.classList.add("advise");
            videoContainer.classList.remove("error");
            videoContainer.classList.remove("success");
            toast.textContent = data;
            toast.style.display = "block";
            toast.classList.add("error");
            toast.classList.remove("success");
        } else if (action === "success") {
            videoContainer.classList.add("success");
            videoContainer.classList.remove("error");
            videoContainer.classList.remove("advise");
            toast.textContent = data;
            toast.style.display = "block";
            toast.classList.remove("error");
            toast.classList.add("success");
        } else if (action === "framesCaptured") {
            images = data;
            videoContainer.style.display = "none";
            toast.classList.remove("error");
            toast.classList.remove("success");
            circle.classList.add("rotate");
            stream.getTracks().forEach(track => track.stop());
        } else if (action === "response") {
            circle.classList.remove("rotate");
            logo.style.display = "block";
            start.style.display = "block";
            videoContainer.style.display = "none";
            if(data.success) {
                if(data.isSpoof) {
                    toast.classList.add("error");
                    toast.textContent = "Identidad no válida";
                } else {
                    toast.classList.add("success");
                    toast.textContent = "Identidad verificada";
                }
            } else {
                toast.classList.add("error");
                toast.textContent = "Error al validar la identidad";
            }
            setTimeout(() => {
                toast.style.display = "none";
                toast.classList.remove("error");
                toast.classList.remove("success");
            }, 3000);
        }
    }
    videoContainer.style.display = "none";
    start.addEventListener("click", async () => {
        circle.classList.add("rotate");
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 480 },
                    height: { ideal: 640 },
                },
            });
            logo.style.display = "none";
            start.style.display = "none";
            circle.classList.remove("rotate");
            videoContainer.style.display = "block";
            new AntiSpoofing({
                videoElement: video,
                canvasElement: canvas,
                stream: stream,
                inputSize: 224,
                scoreThreshold: 0.8,
                modelsRoute: "models",
                referencia: "20250721-2",
                entidad: "fielnet",
                usuario: "usr_fielnet",
                claveUsuario: "Aa12121212",
                urlApi:
                    "https://identidaddigital.iqsec.com.mx/WSCommerceFielValidateR/Api/Todo",
                actionListener: actionListener,
            });
        } catch (error) {
            console.error(error);
        }
    });
    return;
});
