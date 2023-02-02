import "../viewGamePage/style1.css"
export let viewGamePage = /*html*/ `
<!-- red container div -->
  <div id='font_size_game' style="position: relative; display: inline-block">
    <!-- smaller red container div -->
    <div
      style="
        position: absolute;
        display: flex;
        width: 100%;
        align-items: center;
        padding: 20px;
      "
    >
      <!-- player health -->
      <div
        style="
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          border-top: 4px solid white;
          border-left: 4px solid white;
          border-bottom: 4px solid white;
        "
      >
        <div style="background-color: red; height: 30px; width: 100%"></div>
        <div
          id="playerHealth"
          style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
          "
        ></div>
      </div>

      <!-- timer -->
      <div
        id="timer"
        style="
          background-color: black;
          width: 100px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 4px solid white;
        "
      >
        60
      </div>
      <!-- enemy health -->
      <div
        style="
          position: relative;
          width: 100%;
          border-top: 4px solid white;
          border-bottom: 4px solid white;
          border-right: 4px solid white;
        "
      >
        <div style="background-color: red; height: 30px"></div>
        <div
          id="enemyHealth"
          style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          "
        ></div>
      </div>
      <div></div>
    </div>
    <div
      id="displayText"
      style="
        position: absolute;
        color: white;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
      "
    >
      Tie
    </div>
    <div
    id="displayText1"
    style="
      position: absolute;
      color: white;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
    "
  >
  </div>
    <canvas></canvas>
  </div>
`
