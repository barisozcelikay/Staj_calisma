import React from 'react';
import './App.css';
import Menu from './Menu';
import Datas from './Datas';

function App() {
  return (  
    <div className="App">
      <div className = "upper_body">
        <img className= "logo" src = "/images/logo.jpg" alt="turksat_logo"/>
        <p className = "baslik">Uydu Hizmetleri Çözüm Ortağı Portali</p>
        <a href = "https://www.linkedin.com/in/halilibrahimbaykal/" target = "_blank" rel="noopener noreferrer"> <img className = "user" src = "/images/user.png" alt =""></img></a>
        <div className = "languages">
          <a href = "https://www.turksat.com.tr/tr" target = "_blank" rel="noopener noreferrer"><img className = "turkish" src = "/images/turkey.png" alt= "Türkiye"></img></a>
          <a href = "https://www.turksat.com.tr/en" target = "_blank" rel="noopener noreferrer"><img className = "uk" src = "/images/uk.png" alt="uk"></img></a>

        </div>
      </div>
      <div className = "main_area">
      <div className = "menu">
      <h1 className = "Terminal_islemleri">Terminal İşlemleri</h1>
      <Menu kelime = "Yeni Terminal Tanımla"/>
      <Menu kelime = "Paket Değiştir"/>
      <Menu kelime = "Ek Kota Tanımla"/>
      <Menu kelime = "Askıya Al"/>
      <Menu kelime = "Aktif Et"/>
      <Menu kelime = "İptal Et"/>
      <Menu kelime = "Yer Değiştir"/>
      <Menu kelime = "Donanım Değiştir"/>
      <Menu kelime = "IPv4 Güncelle"/>
      <Menu kelime = "Terminal Detay"/>
      </div>

      <div className = "mid_body_up">
      <h4 id = "terminal_istatistik">Terminal İstatistik</h4>
        <div className = "circles">
          <Datas datas = "Aktif" number = "80" color = "#ffffff"/>
          <Datas datas = "Oluşturuldu" number = "61" color = "yellow"/>
          <Datas datas = "Askıda" number = "20" color = "purple"/>
          <Datas datas = "İptal" number = "50" color = "red"/>
        </div>
      </div>

       
       
      </div>

    </div>
  );
}

export default App;
