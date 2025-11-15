# 项目：画板素描（Etch-a-Sketch）

## 描述

不要忘记尽早并经常提交代码！你可以参考提交消息（Commit Messages）课程！

1. 按照我们的说明设置项目的GitHub仓库。

2. 创建一个包含16x16网格方形div的网页。

   - 使用JavaScript创建div，不要通过复制粘贴在HTML文件中手动创建！
   - 最好将你的网格方块放在一个"container"容器div中。这个div可以直接写在你的HTML文件中。
   - 使用Flexbox让div显示为网格（而不是每行一个）。尽管项目名称如此，但不要尝试研究或使用CSS Grid，因为它将在基础路径之后的课程中教授。这个项目是专门练习Flexbox的机会！
   - 注意边框和边距，因为它们会调整方块的大小！
   - "天哪，为什么我的网格没有被创建？？？"
       - 你是否链接了CSS样式表？
       - 打开浏览器的开发者工具。
       - 检查JavaScript控制台中是否有任何错误。
       - 检查你的"elements"面板，看看元素是否实际上已经显示但以某种方式隐藏了。
       - 随意在JavaScript中添加console.log语句，看看它是否真的被加载了。

3. 设置一个"悬停"效果，当鼠标经过网格div时改变其颜色，在网格中留下像笔一样的（像素化）痕迹。

   - **提示**："悬停"是指鼠标进入div时开始，离开div时结束的过程。你可以为这两种事件设置事件监听器作为起点。
   - 有多种方法可以更改div的颜色，包括：
     - 向div添加新类。
     - 使用JavaScript更改div的背景颜色。

4. 在屏幕顶部添加一个按钮，点击后会弹出提示框，询问用户新网格每边的方块数量。输入后，应移除现有网格，并在相同的总空间中（例如，960px宽）生成一个新网格，这样你就有了一个新的素描板。

   - 提示：将用户输入限制为最大100。更多的方块会导致使用更多的计算机资源，可能导致延迟、冻结或崩溃，我们希望避免这种情况。
   - 研究HTML中的按钮标签以及如何在点击时运行JavaScript函数。
   - 同时查看提示框（prompts）的使用方法。
   - 你应该能够输入64，然后弹出一个全新的64x64网格，而不改变使用的像素总量。
5. 将你的项目推送到GitHub！

## 额外挑战

通过引入一系列修改来改变与鼠标交互时方块的行为。

- 不要让整个网格中的方块保持相同的颜色，而是在每次交互时随机化方块的RGB值。
- 此外，实现一个渐进式暗化效果，每次交互将方块变暗10%。目标是在仅十次交互中实现完全黑色（或完全着色）的方块。
  - **提示**：opacity CSS属性在这里很有用。要学习如何使用它，请查看有关opacity CSS属性的MDN文档文章。

你可以选择完成其中一个或两个挑战，由你决定。

----

## 英文原文

### 项目：绘写草图

#### Description

Don’t forget to commit early and often! You can reference the Commit Messages lesson!

1. Follow our instructions on setting up your project’s GitHub repository.

2. Create a webpage with a 16x16 grid of square divs.

   - Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
   - It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
   - Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
   - Be careful with borders and margins, as they can adjust the size of the squares!
   - “OMG, why isn’t my grid being created???”
       - Did you link your CSS stylesheet?
       - Open your browser’s developer tools.
       - Check if there are any errors in the JavaScript console.
       - Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
       - Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

3. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

   - **Hint**: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
   - There are multiple ways to change the color of the divs, including:
     - Adding a new class to the div.
     - Changing the div’s background color using JavaScript.

4. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

   - Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
   - Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
   - Also check out prompts.
   - You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
5. Push your project to GitHub!

#### Extra credit

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

- Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
- Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
  - **Hint**: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.

You can choose to do either one or both of these challenges, it’s up to you.
