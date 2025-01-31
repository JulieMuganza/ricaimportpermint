document.getElementById("ricaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const businessType = document.getElementById("businessType").value;
    const companyName = document.getElementById("companyName").value;

    const response = await fetch("http://localhost:5000/api/business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business_type: businessType, company_name: companyName }),
    });

    const data = await response.json();
    alert(data.message);
});
