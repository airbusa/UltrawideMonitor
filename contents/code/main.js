function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);

    var newX = maxArea.x + Math.round(maxArea.width / numberXslots * x);
    var newY = maxArea.y + Math.round(maxArea.height / numberYslots * y);

    var clientWidth = Math.round(maxArea.width / numberXslots * (x + xSlotToFill)) - (newX - maxArea.x);
    var clientHeight = Math.round(maxArea.height / numberYslots * (y + ySlotToFill)) - (newY - maxArea.y);

    return [newX, newY, clientWidth, clientHeight]
}

function reposition(client, newX, newY, w, h) {
    client.frameGeometry = {
        x: newX,
        y: newY,
        width: w,
        height: h
    }
}

function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var client = workspace.activeClient;
    if (client.moveable && client.resizeable) {
        client.setMaximize(false,false);
        arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
        var newX = arr[0],
            newY = arr[1],
            w = arr[2],
            h = arr[3];
        reposition(client, newX, newY, w, h)
    }
}


function center(workspace, w, h) {
    var client = workspace.activeClient;
    if (client.moveable && client.resizeable) {
        client.setMaximize(false,false);
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var newX = Math.round(maxArea.x + ((maxArea.width - w) / 2));
        var newY = Math.round(maxArea.y + ((maxArea.height - h) / 2));
        reposition(client, newX, newY, w, h);
    }
}

// GRID halves
registerShortcut("MoveWindowToHalves1", "Ultrawide Monitor Half: Left", "Meta+Num+4", function () {
    move(workspace, 2, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToHalves2", "Ultrawide Monitor Half: Right", "Meta+Num+6", function () {
    move(workspace, 2, 1, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToHalves3", "Ultrawide Monitor Half: Center", "Meta+Num+5", function () {
    move(workspace, 4, 1, 1, 0, 2, 1)
});

registerShortcut("MoveWindowToHalves4", "Ultrawide Monitor Half: Top", "Meta+Num+8", function () {
    move(workspace, 1, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToHalves5", "Ultrawide Monitor Half: Bottom", "Meta+Num+2", function () {
    move(workspace, 1, 2, 0, 1, 1, 1)
});

// GRID corner
registerShortcut("MoveWindowToCorner1", "Ultrawide Monitor Corner: Top Left", "Meta+Num+7", function () {
    move(workspace, 2, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToCorner2", "Ultrawide Monitor Corner: Bottom Left", "Meta+Num+1", function () {
    move(workspace, 2, 2, 0, 1, 1, 1)    
});

registerShortcut("MoveWindowToCorner3", "Ultrawide Monitor Corner: Top Right", "Meta+Num+9", function () {
    move(workspace, 2, 2, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToCorner4", "Ultrawide Monitor Corner: Bottom Right", "Meta+Num+3", function () {
    move(workspace, 2, 2, 1, 1, 1, 1)
});

// GRID third
registerShortcut("MoveWindowToThird1", "Ultrawide Monitor Third: First", "Meta+Ctrl+Num+1", function () {
    move(workspace, 3, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToThird2", "Ultrawide Monitor Third: Second", "Meta+Ctrl+Num+2", function () {
    move(workspace, 3, 1, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToThird3", "Ultrawide Monitor Third: Last", "Meta+Ctrl+Num+3", function () {
    move(workspace, 3, 1, 2, 0, 1, 1)
});


// GRID forth
registerShortcut("MoveWindowToForth1", "Ultrawide Monitor Forth: First", "Meta+Shift+Num+1", function () {
    move(workspace, 4, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToForth2", "Ultrawide Monitor Forth: Second", "Meta+Shift+Num+2", function () {
    move(workspace, 4, 1, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToForth3", "Ultrawide Monitor Forth: Third", "Meta+Shift+Num+3", function () {
    move(workspace, 4, 1, 2, 0, 1, 1)
});

registerShortcut("MoveWindowToForth4", "Ultrawide Monitor Forth: Last", "Meta+Shift+Num+4", function () {
    move(workspace, 4, 1, 3, 0, 1, 1)
});


// GRID sixth
registerShortcut("MoveWindowToSixth1", "Ultrawide Monitor Sixth: Bottom Left", "Ctrl+Meta+Alt+Num+1", function () {
    move(workspace, 3, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToSixth2", "Ultrawide Monitor Sixth: Bottom Center", "Ctrl+Meta+Alt+Num+2", function () {
    move(workspace, 3, 2, 1, 1, 1, 1)
});

registerShortcut("MoveWindowToSixth3", "Ultrawide Monitor Sixth: Bottom Right", "Ctrl+Meta+Alt+Num+3", function () {
    move(workspace, 3, 2, 2, 1, 1, 1)
});

registerShortcut("MoveWindowToSixth4", "Ultrawide Monitor Sixth: Top Left", "Ctrl+Meta+Alt+Num+4", function () {
    move(workspace, 3, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToSixth5", "Ultrawide Monitor Sixth: Top Center", "Ctrl+Meta+Alt+Num+5", function () {
    move(workspace, 3, 2, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToSixth6", "Ultrawide Monitor Sixth: Top Right", "Ctrl+Meta+Alt+Num+6", function () {
    move(workspace, 3, 2, 2, 0, 1, 1)
});


// GRID eighths
registerShortcut("MoveWindowToEighths1", "Ultrawide Monitor Eighths: Top Left", "Meta+Alt+Num+1", function () {
    move(workspace, 4, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToEighths2", "Ultrawide Monitor Eighths: Top Left Center", "Meta+Alt+Num+3", function () {
    move(workspace, 4, 2, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToEighths3", "Ultrawide Monitor Eighths: Top Right Center", "Meta+Alt+Num+5", function () {
    move(workspace, 4, 2, 2, 0, 1, 1)
});

registerShortcut("MoveWindowToEighths4", "Ultrawide Monitor Eighths: Top Right", "Meta+Alt+Num+7", function () {
    move(workspace, 4, 2, 3, 0, 1, 1)
});


registerShortcut("MoveWindowToEighths5", "Ultrawide Monitor Eighths: Bottom Left", "Meta+Alt+Num+2", function () {
    move(workspace, 4, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToEighths6", "Ultrawide Monitor Eighths: Bottom Left Center", "Meta+Alt+Num+4", function () {
    move(workspace, 4, 2, 1, 1, 1, 1)
});

registerShortcut("MoveWindowToEighths7", "Ultrawide Monitor Eighths: Bottom Right Center", "Meta+Alt+Num+6", function () {
    move(workspace, 4, 2, 2, 1, 1, 1)
});

registerShortcut("MoveWindowToEighths8", "Ultrawide Monitor Eighths: Bottom Right", "Meta+Alt+Num+8", function () {
    move(workspace, 4, 2, 3, 1, 1, 1)
});

// GRID center
registerShortcut("MoveWindowToCenter1", "Ultrawide Monitor Center: Full HD", "Meta+Alt+Num+0", function () {
    center(workspace, 1920, 1080);
});

registerShortcut("MoveWindowToCenter2", "Ultrawide Monitor Center: Wide", "Meta+Num+0", function () {
    move(workspace, 8, 1, 1, 0, 6, 1)
});
