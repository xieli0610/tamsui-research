
// 3. Tab 切換邏輯
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 4. 倒數計時器邏輯
function startCountdown() {
    const timerElement = document.getElementById("countdown-timer");
    
    // 🔴 關鍵防呆機制：確保網頁上有倒數計時器才執行
    if (!timerElement) return;

    // 設定截稿目標日期 (您可以依需求修改這串日期)
    const countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // 💡 補上分鐘與秒數的計算
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        timerElement.innerHTML = 
            `科展/小論文截稿倒數：${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`;

        if (distance < 0) {
            clearInterval(timer);
            timerElement.innerHTML = "截稿時間已到！";
        }
    }, 1000);
}

// 倒數計時器邏輯
function startCountdown() {
    // 尋找網頁中 id 為 'countdown-timer' 的元素
    const timerElement = document.getElementById("countdown-timer");
    
    // 防呆機制：如果這個網頁沒有倒數計時器（例如在其他分頁），就直接跳出，避免報錯
    if (!timerElement) return;

    // 設定您的目標截稿日期與時間 (您可以自行修改引號內的日期)
    const countDownDate = new Date("2026-07-30 23:59:59").getTime();

    // 設定每 1000 毫秒 (1秒) 更新一次
    const timer = setInterval(function() {
        // 取得現在的真實時間
        const now = new Date().getTime();
        
        // 計算目標時間與現在時間的差距 (毫秒)
        const distance = countDownDate - now;

        // 若時間已到，停止計時並顯示提示文字
        if (distance < 0) {
            clearInterval(timer);
            timerElement.innerHTML = "截稿時間已到！祝您比賽順利！";
            return;
        }

        // 將毫秒轉換為天、時、分、秒
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 將計算好的數字塞回網頁中替換掉原本的文字
        timerElement.innerHTML = `${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`;
        
    }, 1000);
}

// 確保網頁的 HTML 元素都載入完成後，才啟動計時器
document.addEventListener("DOMContentLoaded", startCountdown);