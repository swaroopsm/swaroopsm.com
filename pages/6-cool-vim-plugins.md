---
title: 6 Cool Vim Plugins
author: Swaroop SM
date: 2014-02-04
template: post
category: blog
permalink:
 style: /:category/:title
 pretty: true
tagged:
 - vim
keywords: vim, plugins
---
#### 1. Easy Motion
[EasyMotion](https://github.com/mattn/emmet-vim) provides a quick way to navigate between your code. The plugin highlights all possible words with an alphabet where your cursor can be moved. The default key to highlight the possibilities is: `\\w`

Get this plugin: [Vim EasyMotion](https://github.com/Lokaltog/vim-easymotion)

#### 2. CtrlP
[CtrlP](https://github.com/kien/ctrlp.vim) is a fuzzy file finder. It is a quick way to open files. It can find files in:

  1. In your current buffer.
  2. List files in the directory of the file that you are currently editing.
  3. Open file in a tabbed window.

It has an excellent documentation and you can find more options and features that the ones that are listed above.

Get this plugin: [CtrlP](https://github.com/kien/ctrlp.vim)

#### 3. Emmet-Vim
[Emmet](http://emmet.io/) is a plugin that improves HTML & CSS workflow. For instance assume the following [html5](http://en.wikipedia.org/wiki/HTML5) [doctype declaration](http://en.wikipedia.org/wiki/Document_type_declaration):

{% highlight html %}
\<\!DOCTYPE HTML\>
\<html lang="en">
\<head>
	\<meta charset="UTF-8">
	\<title>\</title>
\</head>
\<body>
\</body>
\</html>
{% endhighlight %}

It would be great if you can display the above snippet, each time you start a new `html web page`. This greatly decreases your time by using these in your code. You can also enter a `div` or `span` tag with an `id` or `class` attribute quickly.

Get this plugin: [Emmet-VIM](https://github.com/mattn/emmet-vim)

#### 4. Vim Multiple Cursors
Do you envy [Sublime Text](http://sublimetext.com) Multiple Selection? Well not any more. [Vim Multiole Cursors](https://github.com/terryma/vim-multiple-cursors) is an attemt to accomplish this feature. Here are some ways to achieve this.

To select multiple words and replace:

- Place the cursor under a word, press `ctrl+n` to select this word. 
- You can press `ctrl+x` to skip the word.
- Press `c` to change the word

To make the most of this plugin check this: https://github.com/terryma/vim-multiple-cursors/issues/39

Get this plugin: [Vim Multiple Cursors](https://github.com/terryma/vim-multiple-cursors)


#### 5. Instant Markdown:
If you always use a `README`, keep updating it frequently and would love to preview it before you push it a code hosting service, such as [Github](http://github.com), then [Instant Markdown](https://github.com/suan/vim-instant-markdown) is the plugin that can let this happen.

The plugin updates the display in realtime, as you are editing your markdown file. By default, this plugin will open the files in a `browser` with `localhost:port` as soon as you open `.markdown`, `.mdown` and `README.md`. If you would like this plugin to work for any `.md` files, then install [vim-markdown](https://github.com/tpope/vim-markdown).

Get this plugin: [Instant Markdown](https://github.com/suan/vim-instant-markdown)

#### 6. gtfo
This plugin allows you to open the `directory` and the `terminal` of the file currently you are editing.

`gof` allows you to open the `directory` of the file that you are currently editing.

`got` allows you to open the `terminal` at the direcory of the file that you are currently editing.

Get this plugin: [gtfo](https://github.com/justinmk/vim-gtfo)

