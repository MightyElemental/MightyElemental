---
layout: default
---

# Projects

## University Disseration

### [Generating Images Using Generative Deep Learning](https://github.com/MightyElemental/swintransgan-faces){:target="_blank"}
How batch and window sizes affect image quality in Swin Transformer GANs

![A sample of the generated output](https://github.com/MightyElemental/swintransgan-faces/raw/master/imgs/BestManualSelected.png)

#### Abstract

With the recent interest in transformers and image generation, the need to test novel methods arises. This paper investigates how window size and batch size affects SwinTranformer GAN image quality. All models had the same number of parameters - 10M for the generator, and 1.7M for the discrimintor. The size difference between the generator and discriminator is because the generator uses transformers whereas the discriminator uses a simpler DCGAN. After testing nine different models, the best was found to have a window size of 8 and a batch size of 100 (FID score of 88.4). The worst was found to have a window size of 8 and batch size of 200 (FID score of 180.6). Future investigation could be undertaken to study the effects of learning rate, attention head count, and transformer layer count. Switching to use a Wasserstein discriminator could also beneficial as it could suppress the mode collapse issues encounted during training.

## Machine Learning

### [Text-to-Image Generator](https://github.com/MightyElemental/Text2ImgGAN){:target="_blank"}

Generates images based on a text input.



## Games

### [Pirate Game 1](https://github.com/uoy-jb2501/ENG1-Pirate-Game){:target="_blank"}

Navigate the seas to defeat enemy colleges. This game includes a perlin-noise generator to create the maps.

![A screenshot from within the game](/img/pirate-game-1.png)

### [Pirate Game 2](https://eng1-team-29.github.io/Assessment-2-Website/){:target="_blank"}

The second pirate-themed game to be created as part of the Software Engineering module at York Uni. This was a continuation of a prior team's work in which we had to implement extra features.

![A screenshot from within the game](https://eng1-team-29.github.io/Assessment-2-Website/img/kraken.png)

The original project can be found here: [ENG1-Project](https://github.com/anna-singleton/ENG1-Project)

### [Factory Wars](https://www.factorywars.net/){:target="_blank"}

A factory-builder game where you complete challenges to level up to better defend your machinery from rival bases.

### [HopSkip](https://github.com/MightyElemental/MZ80K-software){:target="_blank"}

An arcade-style jump'n'dodge game with realistic acceleration designed for the Sharp MZ-80K.

![A screenshot of gameplay from HopSkip](https://github.com/MightyElemental/MZ80K-software/raw/master/HopSkip/images/game.jpg)

### [BattleBits](https://github.com/MightyElemental/BattleBits){:target="_blank"}

A multiplayer battleships game designed for the BBC Micro:bit using the onboard wireless communication module


## Tools

### [Reactor Optimizer](https://github.com/MightyElemental/ReactorOptimizer){:target="_blank"}

A script designed to find the optimal reactor control rod position for best reactor efficiency.
