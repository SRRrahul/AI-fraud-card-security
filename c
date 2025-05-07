#include <stdio.h>

int main() {
    float amount;
    printf("Enter transaction amount: ");
    scanf("%f", &amount);

    if (amount > 1000.0) {
        printf("⚠️ Potential fraud detected!\n");
    } else {
        printf("✅ Transaction looks safe.\n");
    }

    return 0;
}
