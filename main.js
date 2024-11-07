class TreasureMap {
  static getInitialClue() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("在古老的图书馆里找到了第一个线索...");
          }, 1000);
      });
  }

  static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (!clue) {
                  reject("没有线索可以解码!");
              }
              resolve("解码成功!宝藏在一座古老的神庙中...");
          }, 1500);
      });
  }

  static searchTemple(location) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.5) {
                  reject("糟糕!遇到了神庙守卫!");
              }
              resolve("找到了一个神秘的箱子...");
          }, 2000);
      });
  }

  static openTreasureBox() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("恭喜!你找到了传说中的宝藏!");
          }, 1000);
      });
  }

  static crossTheJungle() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.5) {
                  reject("遇到野兽，无法穿越丛林！");
              }
              resolve("成功穿越丛林！");
          }, 1500);
      });
  }

  static solvePuzzle(puzzle) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (!puzzle) {
                  reject("没有谜题可以解！");
              }
              resolve("谜题解开，找到了隐藏的通道！");
          }, 1500);
      });
  }
}

const scenes = {
  libraryScene: document.getElementById('libraryScene'),
  historyClueScene: document.getElementById('historyClueScene'),
  mythClueScene: document.getElementById('mythClueScene'),
  decodeScene: document.getElementById('decodeScene'),
  jungleScene: document.getElementById('jungleScene'),
  puzzleScene: document.getElementById('puzzleScene'),
  templeScene: document.getElementById('templeScene'),
  treasureScene: document.getElementById('treasureScene'),
  failureScene: document.getElementById('failureScene')
};

function showScene(sceneId) {
  for (const scene in scenes) {
      scenes[scene].classList.remove('active');
  }
  scenes[sceneId].classList.add('active');
}

function chooseHistory() {
  showScene('historyClueScene');
}

function chooseMyth() {
  showScene('mythClueScene');
}

function navigateToDecodeScene() {
  showScene('decodeScene');
}

function chooseSafePath() {
  showScene('templeScene');
}

function chooseDangerousPath() {
  showScene('failureScene');
}

function tryToPickLock() {
  showScene('failureScene');
}

function searchForSwitch() {
  showScene('treasureScene');
}

function restartGame() {
  for (const scene in scenes) {
      scenes[scene].classList.remove('active');
  }
  showScene('libraryScene');
}

// 初始化游戏
showScene('libraryScene');