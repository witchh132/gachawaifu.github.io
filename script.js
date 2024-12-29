document.getElementById('showWaifuButton').addEventListener('click', showWaifu);

const waifus = [
    { name: "Asuka Langley", image: "https://i.pinimg.com/736x/be/a7/ab/bea7ab03b2c696c731ef7646f2e95de2.jpg" },
    { name: "Rem", image: "https://i.pinimg.com/236x/08/cf/b1/08cfb1e7b35a6ef44fb37993d2f84c42.jpg" },
    { name: "Emilia", image: "https://i.pinimg.com/474x/d7/f3/9c/d7f39c0c18bb8f37d7eefea22f36eb86.jpg" },
    { name: "Mikasa Ackerman", image: "https://i.pinimg.com/236x/15/78/f1/1578f1ec27d0b7af5620a82da4308725.jpg" },
    { name: "Hinata Hyuga", image: "https://i.pinimg.com/236x/49/77/61/4977616343f2ddc6cb1c8937b33e8036.jpg" },
    { name: "Nami", image: "https://i.pinimg.com/236x/90/a8/4d/90a84d8b56e88acc8946ff4c1fb44850.jpg" },
    { name: "Zero Two", image: "https://i.pinimg.com/236x/5e/30/15/5e30153b76d17935e1a8729b1cf89b1a.jpg" },
    { name: "Megumin", image: "https://i.pinimg.com/236x/1b/a9/d1/1ba9d1f657406dab5ed362948522f322.jpg" },
    { name: "Firefly", image: "https://i.pinimg.com/736x/d3/93/d3/d393d3e0bc9a5b9e5d770d4e825c20fd.jpg" },
    { name: "Saber", image: "https://i.pinimg.com/236x/54/dc/02/54dc023bdf6d38b9d74d0efe0d8a6cc4.jpg" },
    { name: "Miku Nakano", image: "https://i.pinimg.com/736x/cc/93/db/cc93dbf2ad2468717121ecc568a6a359.jpg" },
    { name: "Yuno Gasai", image: "https://i.pinimg.com/236x/88/a8/5b/88a85bee7710e223369affc0b5383d2c.jpg" },
    { name: "Erza Scarlet", image: "https://i.pinimg.com/474x/58/13/64/581364abb3adc8bff034cc75d1bef037.jpg" },
    { name: "Rias Gremory", image: "https://i.pinimg.com/736x/af/e6/db/afe6db4bb04d4fcc25ce9af9ce2797a0.jpg" },
    { name: "Kurumi Tokisaki", image: "https://i.pinimg.com/236x/08/25/dd/0825ddd558b749e20fde49fc9a8da28c.jpg" },
    { name: "Sinon", image: "https://i.pinimg.com/236x/3c/18/61/3c1861b26bc1c403286d76a0ac9ea72a.jpg" },
    { name: "Chitoge Kirisaki", image: "https://i.pinimg.com/236x/56/53/0e/56530edda2e36570c5595a33b154fd3d.jpg" },
    { name: "Momo Yaoyorozu", image: "https://i.pinimg.com/236x/7a/df/22/7adf221e7c327254606701878ed650dd.jpg" },
    { name: "Sakura Matou", image: "https://i.pinimg.com/236x/91/18/ff/9118ff15b422d482103f9b9940ff9115.jpg" },
    { name: "Aqua", image: "https://i.pinimg.com/474x/55/aa/07/55aa077c0384e96bdcf42c5f30a58a65.jpg" },
    { name: "Kaguya-sama", image: "https://i.pinimg.com/236x/6d/c5/67/6dc567f2f7f9a6430ead5d7a9ce5c9d1.jpg" },
    { name: "Akeno Himejima", image: "https://i.pinimg.com/236x/51/31/64/513164c48d1dd6de90612dfb80c76b73.jpg" },
    { name: "Mikoto Misaka", image: "https://i.pinimg.com/736x/61/a4/3b/61a43b496b458e4f99a1cc69993cfa02.jpg" },
    { name: "Kaoruko Waguri", image: "https://i.pinimg.com/474x/89/8e/5f/898e5fa17e204b847035d9c9cc6108a7.jpg" },
    { name: "Chika Fujiwara", image: "https://i.pinimg.com/236x/13/af/82/13af824db410421a3a7f3544dc18c749.jpg" },
    { name: "Yuki Nagato", image: "https://i.pinimg.com/236x/91/bb/ff/91bbff3927c30adcb1678506e8d0cedd.jpg" },
    { name: "Yukino Yukinoshita", image: "https://i.pinimg.com/236x/fb/d1/a9/fbd1a98fcc4b1f2f215a2c8d37f9061a.jpg" },
    { name: "Kotori Minami", image: "https://i.pinimg.com/236x/fd/b4/b4/fdb4b44486ac85ff099b1501be1e776c.jpg" },
    { name: "Nadeshiko Kagamihara", image: "https://i.pinimg.com/236x/48/dc/39/48dc3964cc35c179023849e242ad1811.jpg" },
    { name: "Homura Akemi", image: "https://i.pinimg.com/474x/a6/70/3c/a6703c08f236a9675cb52a1ad4dceaf6.jpg" },
    { name: "Kyouko Sakura", image: "https://i.pinimg.com/736x/0b/36/a5/0b36a5b4560b50667384bdf5c99d03af.jpg" },
    { name: "Hitagi Senjougahara", image: "https://i.pinimg.com/474x/10/81/17/108117d76ef374d4b060411302ff121b.jpg" },
    { name: "Riko Aida", image: "https://i.pinimg.com/236x/d3/29/4b/d3294bb480437f2ba5eed1dabed0917f.jpg" },
    { name: "Yui Hirasawa", image: "https://i.pinimg.com/236x/c6/3a/ce/c63acef14efd5f308fba0e8d5a035903.jpg" },
    { name: "Kaname Chidori", image: "https://i.pinimg.com/236x/8d/76/83/8d7683077f01a6e4b5f2a4ccb6b44605.jpg" },
    { name: "Akame", image: "https://i.pinimg.com/236x/55/90/44/5590443ee5598d1712504055cd35ff63.jpg" },
    { name: "Maki Nishikino", image: "https://i.pinimg.com/236x/5a/f5/3e/5af53e85e1439395ea21195e29032d1c.jpg" },
    { name: "Mai Sakurajima", image: "https://i.pinimg.com/236x/23/80/71/238071dfe12810d0d32a67622ab6fc72.jpg" },
    { name: "Moona Hoshinova", image: "https://i.pinimg.com/236x/c6/f4/dc/c6f4dc2cb1ace7e6703f57ef52f8b1ea.jpg" },
    { name: "Vestia Zeta", image: "https://i.pinimg.com/736x/79/83/29/798329bd6e7d1be7ac988ac4bb41dcbd.jpg" },
    { name: "Hina Chono", image: "https://i.pinimg.com/474x/76/ff/85/76ff850227b4526d6490db2e25e5a7d8.jpg" },
    { name: "Nao Tomori", image: "https://i.pinimg.com/236x/f3/c9/98/f3c998e515a030ef5c2b4314fd5f3bd7.jpg" },
    { name: "Remilia Scarlet", image: "https://i.pinimg.com/236x/24/14/0f/24140f43b56fd8c642b82fbcb60de1a9.jpg" },
    { name: "Rin Tohsaka", image: "https://i.pinimg.com/236x/5b/d4/bc/5bd4bc933569eef69574adae1f06f8b2.jpg" },
    { name: "Hu Tao", image: "https://i.pinimg.com/474x/f2/88/56/f28856e0c27c06746bca71c7f3b9468b.jpg" },
    { name: "Furina", image: "https://i.pinimg.com/236x/a4/48/bc/a448bc34a2081554078be8ac966aa028.jpg" },
    { name: "Yuki Suou", image: "https://i.pinimg.com/474x/27/83/be/2783be560b873add79eccc67fce7310e.jpg" },
    { name: "Nero", image: "https://i.pinimg.com/236x/2f/10/18/2f10182370c1e3f08423eaaf8c6269a1.jpg" }
];

function showWaifu() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('waifuDisplay').style.display = 'none';  

    setTimeout(() => {
        const randomWaifu = waifus[Math.floor(Math.random() * waifus.length)];

        document.getElementById('waifuImage').src = randomWaifu.image;
        document.getElementById('waifuName').innerText = randomWaifu.name;

        document.getElementById('loading').style.display = 'none';
        document.getElementById('waifuDisplay').style.display = 'block';
    }, 1000); 
}
