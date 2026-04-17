import { useState } from 'react'
import './App.css'
import Logo from './assets/cor-logo.png'
import { Compass, User, Settings, Menu, Search, Folder, Star, Plus, FolderClosed, Trophy,  } from 'lucide-react';


export default function App() {

  return (
    <>
      <main>
        <section>
            <div id="titulo">
    <div>
      <p>Fiel Bruno,</p>
      <h2>bem-vindo de volta!🦅</h2>
    </div>
    <div id="menu"><Menu/></div>
  </div>

  <div id="busca">
    <Search/>
    <input type="text" placeholder="Buscar jogos, ídolos ou títulos..." />
  </div>
  
  <div id="cards">
    <div className="card1"><Folder/>
    <strong>8.1 GB</strong>
    <p>Jogos</p>
    </div>
    <div className="card2"><Folder/>
    <strong>22.5 GB</strong>
    <p>Melhores Gols</p>
    </div>
    <div className="card3"><Folder/>
    <strong>10.2 GB</strong>
    <p>Notícias</p>
    </div>
    <div className="card4"><Folder/>
    <strong>3.6 GB</strong>
    <p>Curiosidades</p>
    </div>
  </div>
  <div id="socio">
  <img src={Logo}id='logo' alt="" />
  <div>
    <strong>Seja Sócio Fiel Torcedor</strong>
    <p>Acesse Conteúdo Exclusivo do Timão</p>
  </div>
  <span>›</span>
</div>
<div id="memo">
  <h3>Memórias do Timão</h3>
  <div id="cards1">
    <div className="cards2">
      <strong>Libertadores 2012</strong>
      <p>118 items</p>
      <span>+</span>
    </div>
    <div className="cards3">
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
    <div id="add"><Plus/></div>

  </div>
        </footer>
        </section>

      </main>
    </>
  )
}
