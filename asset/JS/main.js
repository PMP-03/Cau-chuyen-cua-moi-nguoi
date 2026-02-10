// Danh sách thông điệp cho đèn bay ngẫu nhiên
            const messages = [
                "Khoảng cách là thử thách, chân thành là câu trả lời.",
                "Cảm ơn vì đã đi cùng nhau một đoạn tuổi trẻ. Mong bình yên sẽ tìm đến hai ta.",
                "Dù là quá khứ, tương lai hay hiện tại... TÔI ĐỀU YÊU NGƯỜI",
                "Mong gió nơi người dịu dàng với đôi vai nhỏ ấy.",
                "Trưởng thành là khi ta biết trân trọng những lần lỡ hẹn.",
                "Nếu người là lá, thì tôi sẽ đứng dưới tán em",
                "Vạn sự như ý, mọi điều suôn sẻ nhé!",
                "Hãy cứ khóc nức nở như chưa từng được khóc, nhưng khóc xong thì phải mạnh mẽ bước tiếp",
                "Hãy luôn tỏa sáng như ánh mặt trời nhé!",
                "Mong hoa sẽ mọc lên ở những nơi buồn bã nhất trong người. Mong nắng dịu dàng sưởi ấm chặng đường người đi!",
                "Mong chúng ta của sau này, đều trở thành bản thể rực rỡ nhất.",
                "Thương người, bông hoa nhỏ của tôi.",
                "Thế giới này cho dù rách nátn thì vẫn sẽ có người tốt bụng khâu nó lại!",
                "Làm đi, thất bại cũng được, ít nhất thì nó còn thật hơn là cái viễn cảnh hoàn hảo mà ta tự vẽ ra trong đàu",
                "Đừng nhìn về quá khứ để nuối tiếc, hãy nhìn nó để thấy mình đã cần rèn luyện những gì",
                "Đừng nghĩ về việc không 'xứng đáng', trên đời này chỉ có chuyện 'có dám' hay 'không dám' mà thôi!",
                "Chúc bạn luôn mạnh mẽ và hạnh phúc.",
                "Hãy nhớ rằng, sau cơn mưa, màu xanh của bầu trời bao giờ cũng là màu xanh của niềm hy vọng nhất.",
                "Chúc cậu có đủ can đảm để tự vẽ nên một bức tranh của riêng mình.",
                "Đừng để nỗi sợ tự ti ngăn cản bạn chạm tay vào những điều tốt đẹp nhất thế gian.",
                "Chúc cho trái tim cậu đủ bao dung để yêu thương cả những phần chưa hoàn hảo của chính mình.",
                "Cứ theo đuổi đam mê nha. Chắc chắn sẽ thành công!",
                "Yếu tố tiên quyết cứ tiến lên đi đồ ngốc!",
                "Đừng chú tâm vào thành quả của người khác, hãy tập trung phát triển thế mạnh của bản thân!",
                "Hãy tiến lên, tiến lên đi!",
            ];

            const modal = document.getElementById("messageModal");
            const messageText = document.getElementById("messageText");
            const closeModal = document.getElementById("closeModal");
            const skyContainer = document.getElementById("skyContainer");
            const launchBtn = document.getElementById("launchBtn");
            const launchBtn2 = document.getElementById("launchBtn2");

            // Xử lý click vào đèn trời
            function setupLanternClick() {
                document.querySelectorAll(".lantern").forEach((lantern) => {
                    lantern.addEventListener("click", function () {
                        const message = this.getAttribute("data-message");
                        messageText.textContent = message;
                        modal.style.display = "flex";
                    });
                });
            }

            // Đóng modal
            closeModal.addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });

            // Tạo đèn bay ngẫu nhiên khắp màn hình
            function createRandomLantern() {
                const lantern = document.createElement("div");
                lantern.className = "lantern random";

                // Random vị trí từ trái sang phải
                const randomLeft = Math.random() * 90; // 0-90%
                const randomScale = 0.7 + Math.random() * 0.6; // 0.7-1.3
                const randomRotate = -20 + Math.random() * 40; // -20deg đến 20deg
                const randomDuration = 12 + Math.random() * 8; // 12-20s

                lantern.style.left = randomLeft + "%";
                lantern.style.setProperty("--s", randomScale);
                lantern.style.setProperty("--rotate", randomRotate + "deg");
                lantern.style.animationDuration = randomDuration + "s";

                // Random message
                const randomMessage =
                    messages[Math.floor(Math.random() * messages.length)];
                lantern.setAttribute("data-message", randomMessage);

                // Click để xem message
                lantern.addEventListener("click", function () {
                    messageText.textContent = this.getAttribute("data-message");
                    modal.style.display = "flex";
                });

                skyContainer.appendChild(lantern);

                // Xóa sau khi bay hết
                setTimeout(() => {
                    lantern.remove();
                }, randomDuration * 1000);
            }

            // Khi nhấn nút "Thả đèn trời"
            function launchManyLanterns() {
                const count = 20 + Math.floor(Math.random() * 35); // 20-35 đèn

                for (let i = 0; i < count; i++) {
                    setTimeout(() => {
                        createRandomLantern();
                    }, i * 600); // Mỗi đèn cách nhau 200ms
                }
            }

            launchBtn.addEventListener("click", launchManyLanterns);
            launchBtn2.addEventListener("click", launchManyLanterns);

            // Setup click cho đèn tự động
            setupLanternClick();