// **5 Data Produk Awal**  
let produkList = [  
    { id: 1, nama: "Laptop", harga: 12000000 },  
    { id: 2, nama: "Smartphone", harga: 5000000 },  
    { id: 3, nama: "Tablet", harga: 7000000 },  
    { id: 4, nama: "Headphones", harga: 1500000 },  
    { id: 5, nama: "Smartwatch", harga: 3000000 }  
];  

// **Menambahkan Produk**  
function tambahProduk(id, nama, harga) {  
    const newProduk = { id, nama, harga };  
    produkList = [...produkList, newProduk]; // Spread operator untuk menambahkan produk baru  
    console.log(`Produk ${nama} berhasil ditambahkan.`);  
    tampilkanProduk();  
}  

// **Menghapus Produk**  
function hapusProduk(id) {  
    produkList = produkList.filter(produk => produk.id !== id); // Filter untuk menghapus produk  
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);  
    tampilkanProduk();  
}  

// **Menampilkan Semua Produk**  
function tampilkanProduk() {  
    const produkListElement = document.getElementById("produkList");  
    produkListElement.innerHTML = ""; // Clear the list before re-rendering  
    produkList.forEach(({ id, nama, harga }) => { // Destructuring untuk menampilkan produk  
        const li = document.createElement("li");  
        li.textContent = `ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`;  
        produkListElement.appendChild(li);  
    });  
}  

// **Form Tambah Produk**  
document.getElementById("tambahProdukForm").addEventListener("submit", function(event) {  
    event.preventDefault();  
    const id = parseInt(document.getElementById("produkId").value);  
    const nama = document.getElementById("produkNama").value;  
    const harga = parseInt(document.getElementById("produkHarga").value);  
    tambahProduk(id, nama, harga);  
});  

// **Form Hapus Produk**  
document.getElementById("hapusProdukForm").addEventListener("submit", function(event) {  
    event.preventDefault();  
    const id = parseInt(document.getElementById("hapusProdukId").value);  
    hapusProduk(id);  
});  

// Tampilkan produk saat halaman dimuat  
tampilkanProduk();