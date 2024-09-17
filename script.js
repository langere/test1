document.addEventListener('DOMContentLoaded', () => {
    // 获取大图片、小图片和按钮
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const darkenButton = document.getElementById('darkenButton');

    // 用于跟踪图片是否已经变暗
    let isDarkened = false;

    // 遍历所有小图片，为每个小图片添加点击事件
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // 获取被点击的小图片的路径
            const newSrc = thumbnail.src;
            
            // 更改大图片的路径
            mainImage.src = newSrc;
        });
    });

    // 为变暗按钮添加点击事件
    darkenButton.addEventListener('click', () => {
        // 切换变暗效果
        if (isDarkened) {
            mainImage.style.filter = 'none'; // 取消变暗效果
            darkenButton.textContent = '变暗'; // 按钮文字改回“变暗”
        } else {
            mainImage.style.filter = 'brightness(50%)'; // 设置变暗效果
            darkenButton.textContent = '恢复'; // 按钮文字改为“恢复”
        }
        isDarkened = !isDarkened; // 切换状态
    });
});
