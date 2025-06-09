function getWalletData() {
  const address = document.getElementById("wallet").value.trim();
  if (!address) return alert("Vui lòng nhập ví BNB");

  // Dữ liệu demo
  const summary = {
    volume: "$74,487.66",
    alphaPoints: 16,
    pnl: "-$42.74",
    burned: "$65,536"
  };

  const transactions = [
    { hash: "0x9357...d66f", time: "2 giờ trước", from: "SQD", to: "TAIKO", amount: "2259.23", fee: "0.000036 BNB" },
    { hash: "0x884e...1b8a", time: "2 giờ trước", from: "TAIKO", to: "SQD", amount: "927.02", fee: "0.000047 BNB" }
  ];

  document.getElementById("summary").innerHTML = `
    <p><strong>Tổng giao dịch:</strong> ${summary.volume}</p>
    <p><strong>Điểm Alpha:</strong> ${summary.alphaPoints}</p>
    <p><strong>Lợi nhuận/lỗ:</strong> ${summary.pnl}</p>
    <p><strong>Phí gas/burn:</strong> ${summary.burned}</p>
  `;

  const tbody = document.querySelector("#txTable tbody");
  tbody.innerHTML = "";
  transactions.forEach((tx, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${tx.hash}</td>
        <td>${tx.time}</td>
        <td>${tx.from}</td>
        <td>${tx.to}</td>
        <td>${tx.amount}</td>
        <td>${tx.fee}</td>
      </tr>
    `;
  });
}
