(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{372:function(t,e,a){t.exports=a.p+"assets/img/com-recovery.805dc41f.png"},373:function(t,e,a){t.exports=a.p+"assets/img/base-oc-folder.9a1a058a.png"},374:function(t,e,a){t.exports=a.p+"assets/img/com-efi-done.a6fb730e.png"},527:function(t,e,a){t.exports=a.p+"assets/img/file-path.0aea4278.png"},528:function(t,e,a){t.exports=a.p+"assets/img/command-prompt.53392eba.png"},529:function(t,e,a){t.exports=a.p+"assets/img/macrecovery-done.1b0960bc.png"},530:function(t,e,a){t.exports=a.p+"assets/img/basesystem-example.93778929.png"},531:function(t,e,a){t.exports=a.p+"assets/img/macrecovery-after.4c24ba88.jpg"},532:function(t,e,a){t.exports=a.p+"assets/img/DiskManagement.aac12f25.jpg"},533:function(t,e,a){t.exports=a.p+"assets/img/bootice.f83b0859.png"},534:function(t,e,a){t.exports=a.p+"assets/img/restore-mbr.8e5164a9.png"},535:function(t,e,a){t.exports=a.p+"assets/img/restore-mbr-file.a0daa24a.png"},536:function(t,e,a){t.exports=a.p+"assets/img/restore-pbr.2635de6c.png"},537:function(t,e,a){t.exports=a.p+"assets/img/restore-pbr-file.cbf5dcf4.png"},538:function(t,e,a){t.exports=a.p+"assets/img/final-boot-file.a45bcbb9.png"},635:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在-windows-中创建安装器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-中创建安装器"}},[t._v("#")]),t._v(" 在 Windows 中创建安装器")]),t._v(" "),s("ul",[s("li",[t._v("支持的版本：0.6.4")])]),t._v(" "),s("p",[t._v("虽然你不需要进行一次完全重新安装以使用 OpenCore，但是建议一些用户对他们的引导管理器升级进行完全的重新安排。")]),t._v(" "),s("p",[t._v("你需要依赖这些来开始：")]),t._v(" "),s("ul",[s("li",[t._v("4GB USB 驱动器")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("macrecovery.py"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[t._v("这将会需要"),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("已安装的 Python"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"下载-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-macos"}},[t._v("#")]),t._v(" 下载 macOS")]),t._v(" "),s("p",[t._v("获取经典安装程序真的非常简单，首先获取一份 "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCorePkg"),s("OutboundLink")],1),t._v(" 的副本，然后进入 "),s("code",[t._v("/Utilities/macrecovery/")]),t._v(" 目录。接着，拷贝 macrecovery 所在文件夹的路径：")]),t._v(" "),s("ul",[s("li",[t._v("注意：0.6.4 和更低版本的 macrecovery.py 构建是损坏的，你需要"),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 master 分支的副本"),s("OutboundLink")],1),t._v("并使用放置于 "),s("code",[t._v("Utilities/macrecovery/")]),t._v(" 目录下的那一个")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(527),alt:""}})]),t._v(" "),s("p",[t._v("在此，你需要打开一个命令提示符并 cd 到我们刚才拷贝的 macrecovery 的目录下：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Paste_Folder_Path\n")])])]),s("p",[s("img",{attrs:{src:a(528),alt:""}})]),t._v(" "),s("p",[t._v("现在，取决于你想要哪个版本的 macOS，运行下方的其中一组命令（注意，这些脚本依赖于 "),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),s("OutboundLink")],1),t._v(" 支持，如果你还没有安装，那么请安装它）：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lion（10.7）：")]),t._v("\npython macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\npython macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mountain Lion（10.8）：")]),t._v("\npython macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks（10.9）：")]),t._v("\npython macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite（10.10）：")]),t._v("\npython macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan（10.11）：")]),t._v("\npython macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra（10.12）：")]),t._v("\npython macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra（10.13）")]),t._v("\npython macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\npython macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave（10.14）")]),t._v("\npython macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina（10.15）")]),t._v("\npython macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最新版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如：Big Sur（11）")]),t._v("\npython macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),s("ul",[s("li",[s("strong",[t._v("macOS 11, Big Sur 注意事项")]),t._v("：由于这个操作系统是全新的，某些问题依旧需要系统来解决。更多信息请参阅此处："),s("RouterLink",{attrs:{to:"/extras/big-sur/"}},[t._v("OpenCore 和 macOS 11: Big Sur")]),t._v(" "),s("ul",[s("li",[t._v("对于第一次使用的用户，我们推荐 10.15, Catalina")])])],1),t._v(" "),s("li",[s("strong",[t._v("Nvidia 显卡注意事项")]),t._v("：记得确认你的硬件是否支持刚出现的操作系统，请参阅"),s("RouterLink",{attrs:{to:"/macos-limits.html"}},[t._v("硬件限制")])],1)]),t._v(" "),s("p",[t._v("这将会花费一些时间，不过一旦你完成，你可能会得到 BaseSystem 或 RecoveryImage 文件：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(529),alt:""}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("BaseSystem")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("RecoveryImage")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(530),alt:""}})]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(531),alt:""}})])])])]),t._v(" "),s("p",[t._v("现在我们的安装程序已经下载好了，接下来我们需要格式化 USB。")]),t._v(" "),s("h2",{attrs:{id:"创建安装器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建安装器"}},[t._v("#")]),t._v(" 创建安装器")]),t._v(" "),s("p",[t._v("在这里我们将格式化我们的 USB 驱动器同时向 USB 驱动器添加 macOS ，你有 2 个选项：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86-%E7%9A%84%E6%96%B9%E6%B3%95"}},[t._v("使用“磁盘管理”的方法")]),t._v(" "),s("ul",[s("li",[t._v("基于图形用户界面，最简单的方式")]),t._v(" "),s("li",[t._v("仅 UEFI 系统支持（例如：2012 年及以后的系统）")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-diskpart-%E7%9A%84%E6%96%B9%E6%B3%95"}},[t._v("使用“diskpart”的方法")]),t._v(" "),s("ul",[s("li",[t._v("基于命令行，工作量稍大")]),t._v(" "),s("li",[t._v("需要经典系统（例如：无 UEFI 支持，2012 年以前的系统）")])])])]),t._v(" "),s("h3",{attrs:{id:"使用-磁盘管理-的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-磁盘管理-的方法"}},[t._v("#")]),t._v(" 使用“磁盘管理”的方法")]),t._v(" "),s("p",[t._v("只需要打开磁盘管理，并将你的 USB 驱动器格式化为 FAT32 文件系统：")]),t._v(" "),s("ol",[s("li",[t._v("右键单击任务栏上的“开始”菜单按钮然后选择“磁盘管理”。")]),t._v(" "),s("li",[t._v("你应该能看到你的所有分区和磁盘。在界面的下半部分，你会看到你的设备，找到你的 USB 设备。")]),t._v(" "),s("li",[t._v("你需要格式化 USB 驱动器以拥有一个 FAT32 分区。")])]),t._v(" "),s("ul",[s("li",[t._v("如果有多个分区在 USB 驱动器上，为你的 USB 驱动器右键单击每个分区并单击删除卷（这将会清除数据，确保你已经进行过备份并且只删除了 USB 驱动器上的分区）\n"),s("ul",[s("li",[t._v("右键单击未分配的空间并新建一个简单卷。确保它是 FAT32 文件系统，并且至少有 1GB 或 2GB 的大小。将它命名为“EFI”。")])])]),t._v(" "),s("li",[t._v("否则，右键单击 USB 驱动器上的分区并选择格式化，将其调整为 FAT32 文件系统。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(532),alt:""}})]),t._v(" "),s("p",[t._v("接下来，进入 USB 驱动器的根目录并创建一个名为 "),s("code",[t._v("com.apple.recovery.boot")]),t._v(" 的文件夹。然后移动下载好的 BaseSystem 或 RecoveryImage 文件到这个文件夹中。请保证你同时拷贝了 .dmg 和 .chunklist 文件到此文件夹中：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),s("p",[t._v("现在，找到你刚才下载的 OpenCorePkg 并打开它：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(373),alt:""}})]),t._v(" "),s("p",[t._v("在这里我们可以同时看到 IA32（32 位 CPU）和 X64（64 位 CPU）文件夹，选择最适合你的硬件的那一个并打开它。接下来找到 EFI 文件夹，将它放置于 USB 驱动器的根目录，与 com.apple.recovery.boot 在一起。完成后应该看起来像这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(374),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"使用-diskpart-的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-diskpart-的方法"}},[t._v("#")]),t._v(" 使用“diskpart”的方法")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("使用“diskpart”的方法")]),t._v(" "),s("p",[t._v("按下 Windows + R 并输入 "),s("code",[t._v("diskpart")]),t._v("。")]),t._v(" "),s("p",[t._v("现在运行下面的命令：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出可用的磁盘")]),t._v("\nlist disk\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择你的磁盘（例如：disk 1）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" disk "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 格式化驱动器")]),t._v("\nclean\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换到 GPT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于 BOOTICE 和 DuetPkg 的一个奇怪的问题，MBR 磁盘将不能启动")]),t._v("\nconvert gpt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新分区")]),t._v("\ncreate partition primary\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择你的分区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行 clean 以保证我们只有 1 个分区，所以它将会是“partition 1”")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" partition "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将它格式化为 FAT32 文件系统")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fat32 quick\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分配一个新盘符（例如：驱动器 E，确保你想要分配的盘符现在不在使用中）")]),t._v("\nASSIGN "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LETTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E\n")])])]),s("p",[t._v("接下来，进入 USB 驱动器的根目录并创建一个名为 "),s("code",[t._v("com.apple.recovery.boot")]),t._v(" 的文件夹。然后移动下载好的 BaseSystem 或 RecoveryImage 文件到这个文件夹中。请保证你同时拷贝了 .dmg 和 .chunklist 文件到此文件夹中：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),s("p",[t._v("现在，找到你刚才下载的 OpenCorePkg 并打开它：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(373),alt:""}})]),t._v(" "),s("p",[t._v("在这里我们可以同时看到 IA32（32 位 CPU）和 X64（64 位 CPU）文件夹，选择最适合你的硬件的那一个并打开它。然后找到 EFI 文件夹，将它放置于 USB 驱动器的根目录，与 com.apple.recovery.boot 在一起。完成后应该看起来像这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(374),alt:""}})]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("设置经典安装")]),t._v(" "),s("p",[t._v("如果你的固件不支持 UEFI，查看下面的说明：")]),t._v(" "),s("p",[t._v("你需要依赖这些来开始：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.7-zip.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("7-Zip"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.majorgeeks.com/files/details/bootice_64_bit.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BOOTICE"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCorePkg"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("接下来，打开 BOOTICE 并保证你选择了正确的驱动器。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(533),alt:""}})]),t._v(" "),s("p",[t._v("下一步，点击“处理 MBR（Process MBR）”并选择“恢复 MBR（Restore MBR）”，然后选择 OpenCorePkg 中位于 "),s("code",[t._v("Utilities/LegacyBoot/")]),t._v(" 目录下的 "),s("strong",[t._v("boot0")]),t._v(" 文件：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("恢复 MBR")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("恢复 boot0 文件")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(534),alt:""}})]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(535),alt:""}})])])])]),t._v(" "),s("p",[t._v("接着回到主页面并选择“处理 PBR”然后“恢复 PBR”。在这里，选择 OpenCorePkg 中位于 "),s("code",[t._v("Utilities/LegacyBoot/")]),t._v(" 目录下 的 "),s("strong",[t._v("Boot1f32")]),t._v(" 文件：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("恢复 PBR")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("恢复 boot1f32 文件")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(536),alt:""}})]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(537),alt:""}})])])])]),t._v(" "),s("p",[t._v("一旦完成，回到你的 USB 驱动器并完成最后一件事情。在 "),s("code",[t._v("Utilities/LegacyBoot/")]),t._v(" 目录下找到 "),s("strong",[t._v("bootx64")]),t._v("（64 位 CPU）或 "),s("strong",[t._v("bootia32")]),t._v(" （32 位 CPU）文件，然后将其放置到你的驱动器的根目录。"),s("strong",[t._v("将这个文件重命名为 boot")]),t._v(" 以保证 DuetPkg 能正常运行：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(538),alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"现在所有事项都已完成-跳转到设置-efi-以完成你的工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现在所有事项都已完成-跳转到设置-efi-以完成你的工作"}},[t._v("#")]),t._v(" 现在所有事项都已完成，跳转到"),s("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("设置 EFI")]),t._v(" 以完成你的工作")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);