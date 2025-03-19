let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
  ];
  
  // Menampilkan produk
  function tampilkanProduk() {
    const tabelBody = document.querySelector("#tabelProduk tbody");
    tabelBody.innerHTML = ""; // Kosongkan tabel sebelum mengisi ulang
  
    produkToko.forEach(produk => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${produk.id}</td>
        <td>${produk.nama}</td>
        <td>Rp${produk.harga.toLocaleString()}</td>
        <td>${produk.stok}</td>
      `;
      tabelBody.appendChild(row);
    });
  }
  
  // Menambahkan produk
  document.getElementById("formTambahProduk").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const harga = parseInt(document.getElementById("harga").value);
    const stok = parseInt(document.getElementById("stok").value);
  
    if (nama && harga && stok) {
      const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
      produkToko.push({ id: idBaru, nama, harga, stok });
      tampilkanProduk();
      alert(`Produk "${nama}" berhasil ditambahkan.`);
      document.getElementById("formTambahProduk").reset();
    } else {
      alert("Harap isi semua field!");
    }
  });
  
  // Menghapus produk
  document.getElementById("formHapusProduk").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const idHapus = parseInt(document.getElementById("idHapus").value);
    const indeks = produkToko.findIndex(produk => produk.id === idHapus);
  
    if (indeks !== -1) {
      const namaProduk = produkToko[indeks].nama;
      produkToko.splice(indeks, 1);
      tampilkanProduk();
      alert(`Produk "${namaProduk}" berhasil dihapus.`);
      document.getElementById("formHapusProduk").reset();
    } else {
      alert(`Produk dengan ID ${idHapus} tidak ditemukan.`);
    }
  });
  
  // Tampilkan produk
  tampilkanProduk();