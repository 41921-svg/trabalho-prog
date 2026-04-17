import { useState } from 'react'
import './App.css'
import Logo from './assets/cor-logo.png'
import { Compass, User, Settings, Menu, Search, Folder, Star, Plus, FolderClosed, Trophy,  } from 'lucide-react';


export default function App() {

  return (
    <>
      <main>
        <section>
            <div id="header">
    <div>
      <p>Fiel Bruno,</p>
      <h2>bem-vindo de volta!🦅</h2>
    </div>
    <div id="menu">
      <Menu size={25} color="#aaa" />
    </div>
  </div>

  <div id="search">
    <Search size={18} color="#aaa" />
    <input type="text" placeholder="Buscar jogos, ídolos ou títulos..." />
  </div>
  
  <div id="cards">
    <div className="card"><Folder size={32} color="#a78bfa" /><strong>8.1<span style={{fontSize:11, color:'#aaa'}}>GB</span></strong><p>Jogos</p></div>
    <div className="card"><Folder size={32} color="#818cf8" /><strong>22.5<span style={{fontSize:11, color:'#aaa'}}>GB</span></strong><p>Melhores Gols</p></div>
    <div className="card"><Folder size={32} color="#34d399" /><strong>10.2<span style={{fontSize:11, color:'#aaa'}}>GB</span></strong><p>Notícias</p></div>
    <div className="card"><Folder size={32} color="#fb923c" /><strong>3.6<span style={{fontSize:11, color:'#aaa'}}>GB</span></strong><p>Curiosidades</p></div>
  </div>
  <div id="socio">
  <img src={Logo}id='logo' alt="" />
  <div>
    <strong>Seja Sócio Fiel Torcedor</strong>
    <p>Acesse Conteúdo Exclusivo do Timão</p>
  </div>
  <span>›</span>
</div>
<div id="recent">
  <h3>Memórias do Timão</h3>
  <div id="recent-cards">
    <div className="recent-card" style={{background: '#ede9fe'}}>
      <strong>Libertadores 2012</strong>
      <p>118 items</p>
      <span>+</span>
    </div>
    <div className="recent-card" style={{background: '#dcfce7'}}>
      <strong>Gols do Ronaldo</strong>
      <p>255 items</p>
      <span>+</span>
    </div>
  </div>
</div>

        <footer>
  <div id="social">
    <div className="rs"><Compass className='icone'/></div>
    <div className="rs"><FolderClosed className='icone'/></div>
    <div className="rs"><User className='icone'/></div>
    <div id="add"><Plus size={22} color="#fff" /></div>

  </div>
        </footer>
        </section>

      </main>
    </>
  )
}
