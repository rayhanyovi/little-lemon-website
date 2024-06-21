import Swal from "sweetalert2";

export default function Alert(icon, title, message) {
  Swal.fire({
    icon: icon || "error",
    title: title || "Oops...",
    text: message || "Something went wrong. Please try again",
  });
}
