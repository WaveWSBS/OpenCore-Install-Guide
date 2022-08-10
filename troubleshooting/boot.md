# 了解 macOS 启动过程

* 支持版本：0.6.5

因此，通过对 hackintosh 进行故障排除，可能有点难以真正理解*在哪里*您卡住了，因为您尝试搜索的确切关键字可能与谷歌上的任何内容都不匹配。 虽然此页面不能解决您的所有问题，但它至少应该有助于更好地了解您在 macOS 启动过程中遇到的问题，并希望对您遇到问题的原因提供一些想法。

## OpenCore 启动

本节将很简短，因为 OpenCore 启动问题相当罕见，而且通常是简单的用户错误：

* 系统开机并搜索启动设备
* 系统在 EFI/BOOT/ 下的 OpenCore USB 上找到 BOOTx64.efi
* BOOTx64.efi 被加载，然后从 EFI/OC/ 链加载 OpenCore.efi
* 应用 NVRAM 属性
* EFI 驱动从 EFI/OC/Drivers 加载
* 图形输出协议（GOP）已安装
* ACPI 表从 EFI/OC/ACPI 加载
* SMBIOS 数据被应用
* OpenCore 加载并向您显示所有可能的启动选项
* 您现在可以启动 macOS 安装程序

如果此时您在启动时遇到问题，请检查以下主要事项：

* [卡在`no vault provided!`]（./extended/opencore-issues.md#stuck-on-no-vault-provided）
* [看不到 macOS 分区](./extended/opencore-issues.md#can-t-see-macos-partitions)
* [引导 OpenCore 重启到 BIOS](./extended/opencore-issues.md#booting-opencore-reboots-to-bios)

对于其他可能的问题，请参见此处：

* [OpenCore 启动问题](./extended/opencore-issues.md)

## boot.efi 切换

![](../images/troubleshooting/boot-md/1-boot-efi.png)

这就是 macOS 的引导加载程序（boot.efi）出现的地方，特别是它所做的是为内核加载准备环境以及 OpenCore 注入 kexts 的地方。 如果您在这一点上遇到困难，则加载内核可能存在问题，主要罪魁祸首：

* [卡在 EndRandomSeed](./extended/kernel-issues.md#stuck-on-endrandomseed)
* [卡在`[EB|#LOG:EXITBS:START]`](./extended/kernel-issues.md#stuck-on-eb-log-exitbs-start)
* [`Couldn't allocate runtime area` 错误](./extended/kernel-issues.md#couldn-t-allocate-runtime-area-errors)

对于其他可能的问题，请参见此处：

* [内核问题](./extended/kernel-issues.md)

**注意**：在 macOS 10.15.4 中，苹果~~那群胡扯专家~~更改了 boot.efi 调试协议，因此看起来与以前有很大不同，但所有相同的规则仍然适用
## XNU/内核切换

现在 boot.efi 已经为我们设置好了一切，我们现在可以观察内核做这件事了。此部分通常称为 [Rooting 阶段]（https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/booting/booting.html）：

![](../images/troubleshooting/boot-md/2-kernel-start.png)

这部分是验证 SMBIOS 数据、加载 ACPI 表/Kexts 以及 macOS 尝试让一切井井有条的地方。这里的失败通常是由于：

* 损坏的 SSDT
* 损坏的 kexts（或在您的 config.plist -> Kernel -> Add 下设置不正确）
* 混乱的内存映射

有关更多故障排除信息，请参见此处：

* [内核恐慌`无法执行kext摘要`]（./extended/kernel-issues.md#kernel-panic-cannot-perform-kext-summary）
* [在“无效帧指针”上出现内核恐慌](./extended/kernel-issues.md#kernel-panic-on-invalid-frame-pointer)

![](../images/troubleshooting/boot-md/5-apfs-module.png)

现在我们有了`[PCI配置开始]`，这部分可以看作是对我们注入的系统、kexts和SSDTs的硬件测试，以及IOKit在哪里启动硬件probs来查找要连接的设备。

这里测试的主要内容：

* 嵌入式控制器
* 存储（NVMe、SATA 等）
* PCI/e
* 非显存
* 实时时钟
* PS2和I2C

有关如何绕过该区域的更多具体信息，请参见此处：

* [卡在 `RTC...`、`PCI 配置开始`、`Previous Shutdown...`、`HPET`、`HID: Legacy...`](./extended/kernel-issues.md#stuck -on-rtc-pci-configuration-begins-previous-shutdown-hpet-hid-legacy)

![](../images/troubleshooting/boot-md/6-USB-setup.png)

这就是 15 个端口限制和 USB 映射发挥作用的地方，也是臭名昭著的“等待根设备”错误出现的地方，主要检查事项：

* [“等待根设备”或禁止签名错误](./extended/kernel-issues.md#waiting-for-root-device-or-prohibited-sign-error)

![](../images/troubleshooting/boot-md/8-dsmos-arrived.png)

这就是我们的 FakeSMC/VirtualSMC 发挥作用的地方，DSMOS 本身就是一个 kext，可以验证您的系统是否具有 SMC 并请求密钥。如果缺少此密钥，则 DSMOS 将不会解密其余的二进制文件，您将被困在这里。您也可能会卡在 AppleACPICPU 上，这是同样的错误。

* [kextd 停顿[0]：AppleACPICPU](./extended/kernel-issues.md#kextd-stall-0-appleacpicpu)

```
你今天的业力检查：
曾经有一个用户抱怨
他现有的操作系统是如此傻逼，
他最好盗版个牛逼点操作系统
但发现他的硬件想他竖了中指了。
请不要盗用 Mac OS！
真的，这真的很逊好吧。
(C) 苹果电脑公司
```

来源：不要窃取 Mac OS X.kext 翻译自WaveWSBS

![](../images/troubleshooting/boot-md/9-audio.png)

这就是 Apple 的音频驱动程序的用武之地，也是 AppleALC 大放异彩的地方。通常很少在这里看到问题，但如果你这样做，请尝试禁用 AppleALC 和任何其他与音频相关的 kext。

![](../images/troubleshooting/boot-md/10-GPU.png)

在这里，我们开始了 GPU 驱动程序的初始化，以及 WhateverGreen 也发挥了它的魔力。通常这里的错误是由于 GPU 而不是 WhateverGreen 本身，主要罪魁祸首：

* [卡在或差不多卡在`IOConsoleUsers: gIOScreenLock...`](./extended/kernel-issues.md#stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3)
* [在 Navi 上 `IOConsoleUsers: gIOScreenLock...` 后黑屏](./extended/kernel-issues.md#black-screen-after-ioconsoleusers-gioscreenlock-on-navi)
## macOS Handoff

![](../images/troubleshooting/boot-md/11-boot.png)

你终于摆脱了所有的累赘！ 如果您在解决这些累赘之后仍然卡在 Apple 标志上，那么有几件事需要检查：

* [macOS 在登录前冻结](./extended/kernel-issues.md#macos-frozen-right-before-login)
* [在 Navi 上 `IOConsoleUsers: gIOScreenLock...` 后黑屏](./extended/kernel-issues.md#black-screen-after-ioconsoleusers-gioscreenlock-on-navi)
* [30 秒后在 macOS 安装程序中冻结](./extended/userspace-issues.md#frozen-in-the-macos-installer-after-30-seconds)
