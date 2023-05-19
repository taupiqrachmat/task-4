function submitData() {
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;
  const phone = document.getElementById("input-phone").value;
  const subject = document.getElementById("input-subject").value;
  const message = document.getElementById("input-message").value;

  if (name === "") {
    alert("Nama harus diisi!");
    return;
  } else if (email === "") {
    alert("Email harus diisi!");
    return;
  } else if (phone === "") {
    alert("Nomor telepon harus diisi!");
    return;
  } else if (subject === "") {
    alert("Subject harus dipilih!");
    return;
  } else if (message === "") {
    alert("Pesan harus diisi!");
    return;
  }

  const emailReceiver = "taufikrachmatt12@gmail.com";
  const mailtoLink = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silahkan kirimkan pesan saya di nomor ${phone}`;

  const a = document.createElement("a");
  a.href = mailtoLink;
  a.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);
}
