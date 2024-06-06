---
layout: default
---

# Projects

## Machine Learning

### > University Dissertation: [Generating Images Using Generative Deep Learning](https://github.com/MightyElemental/swintransgan-faces){:target="_blank"}
How batch and window sizes affect image quality in Swin Transformer GANs

![A sample of the generated output](https://github.com/MightyElemental/swintransgan-faces/raw/master/imgs/BestManualSelected.png)

#### Abstract

With the recent interest in transformers and image generation, the need to test novel methods arises. This paper investigates how window size and batch size affects SwinTranformer GAN image quality. All models had the same number of parameters - 10M for the generator, and 1.7M for the discrimintor. The size difference between the generator and discriminator is because the generator uses transformers whereas the discriminator uses a simpler DCGAN. After testing nine different models, the best was found to have a window size of 8 and a batch size of 100 (FID score of 88.4). The worst was found to have a window size of 8 and batch size of 200 (FID score of 180.6). Future investigation could be undertaken to study the effects of learning rate, attention head count, and transformer layer count. Switching to use a Wasserstein discriminator could also beneficial as it could suppress the mode collapse issues encounted during training.

### > [Text-to-Image Generator](https://github.com/MightyElemental/Text2ImgGAN){:target="_blank"}

Generates images based on a text input.

### > osu! Beatmap Generator

osu! is a rythm game in which you have to click circles in time to music. Each map needs to be manually created, but this project sets out to automate the process.


## Games

### > [Pirate Game 1](https://github.com/uoy-jb2501/ENG1-Pirate-Game){:target="_blank"}

Navigate the seas to defeat enemy colleges. This game includes a perlin-noise generator to create the maps.

![A screenshot from within the game](/img/pirate-game-1.png)

### > [Pirate Game 2](https://eng1-team-29.github.io/Assessment-2-Website/){:target="_blank"}

The second pirate-themed game to be created as part of the Software Engineering module at York Uni. This was a continuation of a prior team's work in which we had to implement extra features.

![A screenshot from within the game](https://eng1-team-29.github.io/Assessment-2-Website/img/kraken.png)

The original project can be found here: [ENG1-Project](https://github.com/anna-singleton/ENG1-Project){:target="_blank"}

### > [Factory Wars](https://www.factorywars.net/){:target="_blank"}

A factory-builder game where you complete challenges to level up to better defend your machinery from rival bases.

### > [HopSkip](https://github.com/MightyElemental/MZ80K-software){:target="_blank"}

An arcade-style jump'n'dodge game with realistic acceleration designed for the Sharp MZ-80K.

![A screenshot of gameplay from HopSkip](https://github.com/MightyElemental/MZ80K-software/raw/master/HopSkip/images/game.jpg)

### > [BattleBits](https://github.com/MightyElemental/BattleBits){:target="_blank"}

A multiplayer battleships game designed for the BBC Micro:bit using the onboard wireless communication module

## Tools

### > [Reactor Optimizer](https://github.com/MightyElemental/ReactorOptimizer){:target="_blank"}

A script designed to find the optimal reactor control rod position for best reactor efficiency.

## Other

### > A-Level Assessment: [Xendos](https://github.com/MightyElemental/Xendos){:target="_blank"}

Created as part of my A-Level course in Computer Science, this is a simulated operating system that has a custom window manager and an extensible software system. Windows can be dragged, stacked, hidden, and unhidden. Additional software can be loaded directly from packaged jar files without needing to recompile Xendos. The Xendos development library has multiple UI elements to construct applications with.

![A screenshot of XendosXP](https://github.com/MightyElemental/Xendos/raw/master/imgs/xendos-splatter.png)

### > [Audio Drama Generator](https://github.com/MightyElemental/audio-drama-generator){:target="_blank"}

A system to generate stories and act them out from any given user prompt. Characters can be customized and it supports multiple TTS systems including OpenAI, ElevenLabs, dectalk, and a custom API endpoint.

### > [Haskell Raytracer](https://github.com/MightyElemental/Haskell-RayTracer){:target="_blank"}

A raytracer written in Haskell that supports planes, spheres, lighting, and reflections.

![Rendered image from the raytracer](https://github.com/MightyElemental/Haskell-RayTracer/raw/master/haskell-rt-reflective-preview.png)

### > [Custom 16-bit CPU](https://github.com/MightyElemental/mv1624-cpu){:target="_blank"}

The CPU design modules at York inspired me to design my own processor. To expand upon the CPU designed at university, I am working to include a vector processing unit. This serves more as a sandbox for experimentation, but I intend to implement it onto an FPGA to use as part of a fully-functional computer.

### > [Custom Programming Language Interpreter](https://github.com/MightyElemental/SomeUnnamedLanguage){:target="_blank"}

An interpreter for a custom programming language. An old project that I would redo in a functional language using grammars. An example of the code:

code:
```
set :num1 to 5
add 10 to :num1
display "5 + 10 = " :num1
add 7.5 to :num1
display "15 + 7.5 = " :num1
```
output:
```
5 + 10 = 15
15 + 7.5 = 22.5
```